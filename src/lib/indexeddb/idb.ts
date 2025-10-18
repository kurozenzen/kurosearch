const COMMENT_LIFETIME_HOURS = 48;
const POST_LIFETIME_HOURS = 48;

// Allow tests to isolate databases by overriding the name via a global
const DB_NAME: string = (globalThis as any).__KUROSEARCH_IDB_NAME__ ?? 'kurosearch';

let idb: IDBDatabase | undefined;

const currentHour = () => Math.round(new Date().getTime() / 1000 / 60 / 60);

const clean = async () =>
	new Promise<void>((resolve) => {
		if (!idb) {
			resolve();
			return;
		}

		const transaction = idb.transaction(['comments', 'posts'], 'readwrite');
		transaction.addEventListener('error', () => resolve());
		transaction.addEventListener('complete', () => resolve());
		transaction.addEventListener('abort', () => resolve());

		const commentThreshold = currentHour() - COMMENT_LIFETIME_HOURS;
		const commentRange = IDBKeyRange.upperBound(commentThreshold);
		const commentStore = transaction.objectStore('comments');
		const commentRequest = transaction
			.objectStore('comments')
			.index('indexedAt')
			.openCursor(commentRange);
		commentRequest.addEventListener('success', (event) => {
			const cursor = (event.target as IDBRequest).result;
			if (cursor) {
				commentStore.delete(cursor.primaryKey);
				cursor.continue();
			}
		});

		const postThreshold = currentHour() - POST_LIFETIME_HOURS;
		const postRange = IDBKeyRange.upperBound(postThreshold);
		const postStore = transaction.objectStore('posts');
		const postRequest = postStore.index('indexedAt').openCursor(postRange);
		postRequest.addEventListener('success', (event) => {
			const cursor = (event.target as IDBRequest).result;
			if (cursor) {
				postStore.delete(cursor.primaryKey);
				cursor.continue();
			}
		});
	});

const initIdb = async (): Promise<IDBDatabase> => {
	return new Promise((resolve, reject) => {
		const request = indexedDB.open(DB_NAME, 4);
		request.addEventListener('success', (e) => resolve((e.target as IDBRequest).result));
		request.addEventListener('error', (e) => {
			const target = e.target as IDBRequest;
			const errorName = target.error?.name || 'UnknownError';
			const errorMessage = target.error?.message || 'No error message available';
			reject(new Error(`IndexedDB open failed: ${errorName} - ${errorMessage}`));
		});
		request.addEventListener('upgradeneeded', (event) => {
			const db = (event.target as IDBOpenDBRequest).result;
			const transaction = (event.target as IDBOpenDBRequest).transaction!;
			transaction.addEventListener('complete', () => resolve(db));
			transaction.addEventListener('error', (e) => reject(e));
			transaction.addEventListener('abort', (e) => reject(e));

			// had too many indices in the past, oops. Remove them all first.
			{
				const storeNames = Array.from(db.objectStoreNames as any as string[]);
				if (storeNames.includes('tags')) {
					const tagStore = transaction.objectStore('tags');
					const names = Array.from(tagStore.indexNames as any as string[]);
					if (names.includes('name')) {
						try {
							tagStore.deleteIndex('name');
						} catch (e) {
							void e;
						}
					}
					if (names.includes('type')) {
						try {
							tagStore.deleteIndex('type');
						} catch (e) {
							void e;
						}
					}
					if (names.includes('count')) {
						try {
							tagStore.deleteIndex('count');
						} catch (e) {
							void e;
						}
					}
				}
			}

			{
				const storeNames = Array.from(db.objectStoreNames as any as string[]);
				if (!storeNames.includes('tags')) {
					try {
						db.createObjectStore('tags', { keyPath: 'name' });
					} catch (e) {
						reject(e);
					}
				}

				if (!storeNames.includes('comments')) {
					try {
						const commentStore = db.createObjectStore('comments', { keyPath: 'postId' });
						commentStore.createIndex('indexedAt', 'indexedAt', { unique: false });
					} catch (e) {
						reject(e);
					}
				}

				if (!storeNames.includes('posts')) {
					try {
						const postStore = db.createObjectStore('posts', { keyPath: 'id' });
						postStore.createIndex('indexedAt', 'indexedAt', { unique: false });
					} catch (e) {
						reject(e);
					}
				}
			}
		});
	});
};

// Check if debug mode is enabled via URL parameter
const isDebugMode = () => {
	if (typeof window === 'undefined') return false;
	const params = new URLSearchParams(window.location.search);
	return params.has('debug');
};

// Helper to log errors only in debug mode
const debugError = (...args: any[]) => {
	if (isDebugMode()) {
		console.error(...args);
	}
};

const debugWarn = (...args: any[]) => {
	if (isDebugMode()) {
		console.warn(...args);
	}
};

if (typeof indexedDB !== 'undefined') {
	initIdb()
		.then((db) => {
			idb = db;
			return clean();
		})
		.catch((error) => {
			debugError('Failed to initialize IndexedDB:', error);
			debugWarn('IndexedDB caching will be disabled. The app will still work but may be slower.');
		});
} else {
	debugWarn('IndexedDB is not available in this environment; skipping initialization.');
}

export const addIndexedTag = (tag: kurosearch.Tag) => {
	if (!idb) {
		return;
	}

	const transaction = idb.transaction('tags', 'readwrite');
	transaction.addEventListener('error', (e) => debugError('[T] Tag Index Error:', e));
	transaction.addEventListener('abort', (e) => debugError('[T] Tag Index Abort:', e));

	const store = transaction.objectStore('tags');
	const request = store.put(tag);
	request.addEventListener('error', (e) => debugError('[R] Tag Index Error:', e));
};

export const addIndexedComments = (postId: number, comments: kurosearch.Comment[]) => {
	if (!idb) {
		return;
	}

	const transaction = idb.transaction('comments', 'readwrite');
	transaction.addEventListener('error', (e) => debugError('[T] Comment Index Error:', e));
	transaction.addEventListener('abort', (e) => debugError('[T] Comment Index Abort:', e));

	const indexedAt = currentHour();
	const request = transaction.objectStore('comments').put({ postId, comments, indexedAt });
	request.addEventListener('error', (e) => debugError('[R] Comment Index Error:', e));
};

export const addIndexedPost = (post: kurosearch.Post) => {
	if (!idb) {
		return;
	}

	const transaction = idb.transaction('posts', 'readwrite');
	transaction.addEventListener('error', (e) => debugError('[T] Post Index Error:', e));
	transaction.addEventListener('abort', (e) => debugError('[T] Post Index Abort:', e));

	const indexedAt = currentHour();
	const request = transaction.objectStore('posts').put({ ...post, indexedAt });
	request.addEventListener('error', (e) => debugError('[R] Post Index Error:', e));
};

export const addIndexedPosts = (posts: kurosearch.Post[]) => {
	if (!idb) {
		return;
	}

	const transaction = idb.transaction(['posts', 'tags'], 'readwrite');
	transaction.addEventListener('error', (e) => debugError('[T] Posts Index Error:', e));
	transaction.addEventListener('abort', (e) => debugError('[T] Posts Index Abort:', e));

	const indexedAt = currentHour();

	// Get stores once outside loop for better performance
	const postStore = transaction.objectStore('posts');
	const tagStore = transaction.objectStore('tags');

	// Deduplicate tags before writing
	const uniqueTags = new Map<string, kurosearch.Tag>();

	for (const post of posts) {
		const request = postStore.put({ ...post, indexedAt });
		request.addEventListener('error', (e) => debugError('[R] Post Index Error:', e));

		// Collect unique tags
		for (const tag of post.tags) {
			uniqueTags.set(tag.name, tag);
		}
	}

	// Write unique tags only once
	for (const tag of uniqueTags.values()) {
		const tagRequest = tagStore.put(tag);
		tagRequest.addEventListener('error', (e) => debugError('[R] Tag Index Error:', e));
	}
};

export const getIndexedTag = async (name: string): Promise<kurosearch.Tag | undefined> =>
	new Promise((resolve) => {
		if (!idb) {
			resolve(undefined);
			return;
		}
		const transaction = idb.transaction('tags', 'readonly');
		transaction.addEventListener('error', () => resolve(undefined));
		transaction.addEventListener('abort', () => resolve(undefined));

		const request = transaction.objectStore('tags').get(name);
		request.addEventListener('success', (e) => resolve((e.target as IDBRequest).result));
	});

export const getIndexedComments = async (
	postId: number
): Promise<kurosearch.Comment[] | undefined> =>
	new Promise((resolve) => {
		if (!idb) {
			resolve(undefined);
			return;
		}
		const transaction = idb.transaction('comments', 'readonly');
		transaction.addEventListener('error', () => resolve(undefined));
		transaction.addEventListener('abort', () => resolve(undefined));

		const request = transaction.objectStore('comments').get(postId);

		request.addEventListener('success', (e) => resolve((e.target as IDBRequest).result?.comments));
	});

export const getIndexedPost = async (id: number): Promise<kurosearch.Post | undefined> =>
	new Promise((resolve) => {
		if (!idb) {
			resolve(undefined);
			return;
		}
		const transaction = idb.transaction('posts', 'readonly');
		transaction.addEventListener('error', () => resolve(undefined));
		transaction.addEventListener('abort', () => resolve(undefined));

		const request = transaction.objectStore('posts').get(id);
		request.addEventListener('success', (e) => resolve((e.target as IDBRequest).result));
	});
