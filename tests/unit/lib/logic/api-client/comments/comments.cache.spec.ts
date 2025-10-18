import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

import { getComments } from '$lib/logic/api-client/comments/comments';
import * as idb from '$lib/indexeddb/idb';

const delay = (ms = 10) => new Promise((r) => setTimeout(r, ms));

const clearStores = async () => {
	await new Promise<void>((resolve, reject) => {
		const req = indexedDB.open('kurosearch', 4);
		req.addEventListener('success', (e) => {
			const db = (e.target as IDBOpenDBRequest).result;
			const tx = db.transaction(['comments', 'posts', 'tags'], 'readwrite');
			tx.objectStore('comments').clear();
			tx.objectStore('posts').clear();
			tx.objectStore('tags').clear();
			tx.addEventListener('complete', () => resolve());
			tx.addEventListener('error', (err) => reject(err));
			tx.addEventListener('abort', (err) => reject(err));
		});
		req.addEventListener('error', (e) => reject(e));
	});
};

// Helper to set window.location.origin deterministically for URL building
const setOrigin = (origin: string) => {
	Object.defineProperty(window, 'location', {
		value: new URL(origin),
		writable: true
	});
};

const originalFetch = global.fetch;

describe('api-client/comments (cache and auth branches)', () => {
	beforeEach(async () => {
		setOrigin('http://localhost:3000/');
		// wait for idb module to initialize and clear any previous state
		await delay(20);
		await clearStores();
	});

	afterEach(() => {
		global.fetch = originalFetch as any;
		vi.restoreAllMocks();
	});

	// @ts-ignore
	it('returns cached comments without calling fetch', async () => {
		// Ensure cache is empty then seed it
		const postId = 42;
		const cached = [{ author: 'alice', createdAt: '2024-01-01 00:00', content: 'hello' }];
		// seed via real idb helper and give it time to commit
		idb.addIndexedComments(postId, cached as any);
		await delay(10);

		const fetchSpy = vi.fn();
		global.fetch = fetchSpy;

		const res = await getComments(postId);
		expect(res).toEqual(cached);
		expect(fetchSpy).not.toHaveBeenCalled();
	});

	it('appends api_key and user_id to request URL when both are provided', async () => {
		// Ensure no cache hit
		// @ts-ignore
		idb.__reset?.();

		const xml =
			'<comments type="array"><comment created_at="2023-01-01 10:20" post_id="9" body="comment" creator="kurozenzen" id="2" creator_id="1"/></comments>';
		const fetchSpy = vi.fn((url: any) => {
			expect(url).toBeInstanceOf(URL);
			expect(url.searchParams.get('post_id')).toBe('9');
			expect(url.searchParams.get('api_key')).toBe('KEY');
			expect(url.searchParams.get('user_id')).toBe('USER');
			return Promise.resolve({
				ok: true,
				text: () => Promise.resolve(xml)
			});
		});
		// @ts-expect-error
		global.fetch = fetchSpy;

		const out = await getComments(9, 'KEY', 'USER');
		expect(out).toEqual([
			{ author: 'kurozenzen', createdAt: '2023-01-01 10:20', content: 'comment' }
		]);
		expect(fetchSpy).toHaveBeenCalledTimes(1);
	});

	it('uses localhost origin when window is undefined', async () => {
		// Ensure clean state
		// @ts-ignore
		idb.__reset?.();

		const savedWindow: any = (global as any).window;
		// @ts-ignore
		delete (global as any).window;
		try {
			const xml =
				'<comments type="array"><comment created_at="2023-01-01 10:20" post_id="7" body="comment" creator="anon" id="1" creator_id="1"/></comments>';
			const fetchSpy = vi.fn((url: any) => {
				expect(url).toBeInstanceOf(URL);
				expect(url.origin).toBe('http://localhost');
				return Promise.resolve({ ok: true, text: () => Promise.resolve(xml) });
			});
			// @ts-expect-error
			global.fetch = fetchSpy;

			const out = await getComments(7);
			expect(out).toEqual([{ author: 'anon', createdAt: '2023-01-01 10:20', content: 'comment' }]);
			expect(fetchSpy).toHaveBeenCalledTimes(1);
		} finally {
			// restore window
			(global as any).window = savedWindow;
		}
	});
});
