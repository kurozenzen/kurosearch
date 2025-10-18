import { describe, it, expect, vi } from 'vitest';

// We'll use fake-indexeddb for tests that require IndexedDB

const ensureFakeIndexedDB = async () => {
	const mod: any = await import('fake-indexeddb');
	// Explicitly attach to globals in case previous tests deleted them
	(globalThis as any).indexedDB = mod.indexedDB;
	(globalThis as any).IDBKeyRange = mod.IDBKeyRange;
};

const delay = (ms = 10) => new Promise((r) => setTimeout(r, ms));

// Helper to pre-seed the DB before the module initializes and runs cleanup
const seedOldData = async () => {
	// Ensure fake indexeddb globals are present
	await ensureFakeIndexedDB();

	return await new Promise<void>((resolve, reject) => {
		const request = indexedDB.open('kurosearch', 4);
		request.addEventListener('upgradeneeded', (event) => {
			const db = (event.target as IDBOpenDBRequest).result;
			// Create object stores and indices similar to production
			if (!db.objectStoreNames.contains('tags')) {
				db.createObjectStore('tags', { keyPath: 'name' });
			}
			if (!db.objectStoreNames.contains('comments')) {
				const commentStore = db.createObjectStore('comments', { keyPath: 'postId' });
				commentStore.createIndex('indexedAt', 'indexedAt', { unique: false });
			}
			if (!db.objectStoreNames.contains('posts')) {
				const postStore = db.createObjectStore('posts', { keyPath: 'id' });
				postStore.createIndex('indexedAt', 'indexedAt', { unique: false });
			}
		});
		request.addEventListener('success', async (e) => {
			const db = (e.target as IDBOpenDBRequest).result;
			const tx = db.transaction(['comments', 'posts'], 'readwrite');
			const hour = Math.round(Date.now() / 1000 / 60 / 60);
			// Set very old records so cleanup will remove them
			tx.objectStore('comments').put({ postId: 123, comments: [{ id: 1 }], indexedAt: hour - 100 });
			tx.objectStore('posts').put({ id: 999, indexedAt: hour - 100 });
			tx.addEventListener('complete', () => resolve());
			tx.addEventListener('error', (err) => reject(err));
			tx.addEventListener('abort', (err) => reject(err));
		});
		request.addEventListener('error', (e) => reject(e));
	});
};

describe('idb module init behavior', () => {
	it('falls back when IndexedDB is not available', async () => {
		vi.resetModules();
		// Remove indexedDB and IDBKeyRange from global to simulate unsupported env
		// @ts-ignore
		delete (globalThis as any).indexedDB;
		// @ts-ignore
		delete (globalThis as any).IDBKeyRange;

		// Mock window.location.search to enable debug mode
		Object.defineProperty(window, 'location', {
			value: { search: '?debug' },
			writable: true
		});

		const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
		await import('$lib/indexeddb/idb');
		expect(warn).toHaveBeenCalled();
		warn.mockRestore();
	});
});

describe('idb module basic operations with fake-indexeddb', () => {
	it('initializes, cleans old entries, and supports add/get helpers', async () => {
		vi.resetModules();
		await seedOldData();

		const mod = await import('$lib/indexeddb/idb');
		// allow init promise chain to resolve and cleanup to run
		await delay(20);

		// Old entries should be cleaned
		await new Promise<void>((resolve, reject) => {
			const req = indexedDB.open('kurosearch', 4);
			req.addEventListener('success', (e) => {
				const db = (e.target as IDBOpenDBRequest).result;
				const tx = db.transaction(['comments', 'posts'], 'readonly');
				const cReq = tx.objectStore('comments').get(123);
				const pReq = tx.objectStore('posts').get(999);
				let checked = 0;
				const done = () => {
					if (++checked === 2) resolve();
				};
				cReq.addEventListener('success', () => {
					expect((cReq as IDBRequest).result).toBeUndefined();
					done();
				});
				pReq.addEventListener('success', () => {
					expect((pReq as IDBRequest).result).toBeUndefined();
					done();
				});
				tx.addEventListener('error', (err) => reject(err));
				tx.addEventListener('abort', (err) => reject(err));
			});
			req.addEventListener('error', (e) => reject(e));
		});

		// Use helpers to add and retrieve
		const post: any = { id: 1, tags: [{ name: 'a' }], score: 0 };
		mod.addIndexedPost(post);
		mod.addIndexedComments(1, [{ id: 10 } as any]);
		mod.addIndexedTag({ name: 'a', type: 'tag', count: 1 } as any);
		mod.addIndexedPosts([{ id: 2, tags: [{ name: 'b' }], score: 1 } as any]);

		// Give IDB time to commit writes
		await delay(10);

		const tag = await mod.getIndexedTag('a');
		expect(tag?.name).toBe('a');

		const comments = await mod.getIndexedComments(1);
		expect(comments?.[0]).toEqual({ id: 10 });

		const storedPost = await mod.getIndexedPost(1);
		expect(storedPost?.id).toBe(1);
	});

	it('deletes legacy tag indices during upgrade', async () => {
		vi.resetModules();
		await ensureFakeIndexedDB();

		// Use an isolated DB name for this test to avoid cross-test interference
		const DB_NAME = 'kurosearch-legacy-upgrade-test';
		// @ts-ignore override used by module under test
		(globalThis as any).__KUROSEARCH_IDB_NAME__ = DB_NAME;

		// Ensure we start from a clean DB state for version downgrade
		await new Promise<void>((resolve, reject) => {
			const del = indexedDB.deleteDatabase(DB_NAME);
			del.addEventListener('success', () => resolve());
			del.addEventListener('blocked', () => resolve());
			del.addEventListener('error', (e) => reject(e));
		});

		// Create v2 DB with a tags store that has indices name/type/count
		await new Promise<void>((resolve, reject) => {
			const req = indexedDB.open(DB_NAME, 2);
			req.addEventListener('upgradeneeded', (e) => {
				const db = (e.target as IDBOpenDBRequest).result;
				const store = db.createObjectStore('tags', { keyPath: 'name' });
				store.createIndex('name', 'name');
				store.createIndex('type', 'type');
				store.createIndex('count', 'count');
			});
			req.addEventListener('success', () => resolve());
			req.addEventListener('error', (e) => reject(e));
		});

		// Now import module; it opens with version 4 and should remove those indices
		await import('$lib/indexeddb/idb');
		await delay(10);

		await new Promise<void>((resolve, reject) => {
			const req = indexedDB.open('kurosearch', 4);
			req.addEventListener('success', (e) => {
				const db = (e.target as IDBOpenDBRequest).result;
				const tx = db.transaction('tags', 'readonly');
				const store = tx.objectStore('tags');
				const names = Array.from(store.indexNames);
				expect(names.includes('name')).toBe(false);
				expect(names.includes('type')).toBe(false);
				expect(names.includes('count')).toBe(false);
				resolve();
			});
			req.addEventListener('error', (e) => reject(e));
		});
	});

	it('helper guards return early when idb is not yet ready', async () => {
		vi.resetModules();
		await import('fake-indexeddb');
		const mod = await import('$lib/indexeddb/idb');
		// Call immediately before init promise assigns idb
		mod.addIndexedTag({ name: 'x', type: 'tag', count: 0 } as any);
		mod.addIndexedComments(42, []);
		mod.addIndexedPost({ id: 123, tags: [], score: 0 } as any);
		const tag = await mod.getIndexedTag('x');
		const comments = await mod.getIndexedComments(42);
		const post = await mod.getIndexedPost(123);
		expect(tag).toBeUndefined();
		expect(comments).toBeUndefined();
		expect(post).toBeUndefined();
	});
});
