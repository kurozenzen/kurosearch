const COMMENT_LIFETIME_HOURS = 48;
const POST_LIFETIME_HOURS = 48;

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

		const threshold = currentHour() - COMMENT_LIFETIME_HOURS;
		const range = IDBKeyRange.upperBound(threshold);

		const commentStore = transaction.objectStore('comments');
		const commentRequest = transaction.objectStore('comments').index('indexedAt').openCursor(range);
		commentRequest.addEventListener('success', (event) => {
			const cursor = (event.target as IDBRequest).result;
			if (cursor) {
				commentStore.delete(cursor.primaryKey);
				cursor.continue();
			}
		});

		const postStore = transaction.objectStore('posts');
		const postRequest = postStore.index('indexedAt').openCursor(range);
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
		const request = indexedDB.open('kurosearch', 3);
		request.addEventListener('success', (e) => resolve((e.target as IDBRequest).result));
		request.addEventListener('error', (e) => reject(e));
		request.addEventListener('upgradeneeded', (event) => {
			const db = (event.target as IDBOpenDBRequest).result;
			const transaction = (event.target as IDBOpenDBRequest).transaction!;
			transaction.addEventListener('complete', () => resolve(db));
			transaction.addEventListener('error', (e) => reject(e));
			transaction.addEventListener('abort', (e) => reject(e));

			// had too many indices in the past, oops. Remove them all first.
			if (db.objectStoreNames.contains('tags')) {
				const tagStore = transaction.objectStore('tags');
				if (tagStore.indexNames.contains('name')) {
					tagStore.deleteIndex('name');
				}
				if (tagStore.indexNames.contains('type')) {
					tagStore.deleteIndex('type');
				}
				if (tagStore.indexNames.contains('count')) {
					tagStore.deleteIndex('count');
				}
			}

			if (!db.objectStoreNames.contains('tags')) {
				try {
					db.createObjectStore('tags', { keyPath: 'name' });
				} catch (e) {
					reject(e);
				}
			}

			if (!db.objectStoreNames.contains('comments')) {
				try {
					const commentStore = db.createObjectStore('comments', { keyPath: 'postId' });
					commentStore.createIndex('indexedAt', 'indexedAt', { unique: false });
				} catch (e) {
					reject(e);
				}
			}

			if (!db.objectStoreNames.contains('posts')) {
				try {
					const postStore = db.createObjectStore('posts', { keyPath: 'id' });
					postStore.createIndex('indexedAt', 'indexedAt', { unique: false });
				} catch (e) {
					reject(e);
				}
			}
		});
	});
};

initIdb()
	.then((db) => {
		idb = db;
	})
	.catch((error) => console.error('Failed to initialize IndexedDB:', error))
	.then(clean)
	.catch((error) => console.error('Failed to clean IndexedDB:', error));

export const addIndexedTag = (tag: kurosearch.Tag) => {
	if (!idb) {
		return;
	}

	const transaction = idb.transaction('tags', 'readwrite');
	transaction.addEventListener('error', (e) => console.error('[T] Tag Index Error:', e));
	transaction.addEventListener('abort', (e) => console.error('[T] Tag Index Abort:', e));

	const store = transaction.objectStore('tags');
	const request = store.put(tag);
	request.addEventListener('error', (e) => console.error('[R] Tag Index Error:', e));
};

export const addIndexedComments = (postId: number, comments: kurosearch.Comment[]) => {
	if (!idb) {
		return;
	}

	const transaction = idb.transaction('comments', 'readwrite');
	transaction.addEventListener('error', (e) => console.error('[T] Comment Index Error:', e));
	transaction.addEventListener('abort', (e) => console.error('[T] Comment Index Abort:', e));

	const indexedAt = currentHour();
	const request = transaction.objectStore('comments').put({ postId, comments, indexedAt });
	request.addEventListener('error', (e) => console.error('[R] Comment Index Error:', e));
};

export const addIndexedPost = (post: kurosearch.Post) => {
	if (!idb) {
		return;
	}

	const transaction = idb.transaction('posts', 'readwrite');
	transaction.addEventListener('error', (e) => console.error('[T] Post Index Error:', e));
	transaction.addEventListener('abort', (e) => console.error('[T] Post Index Abort:', e));

	const indexedAt = currentHour();
	const request = transaction.objectStore('posts').put({ ...post, indexedAt });
	request.addEventListener('error', (e) => console.error('[R] Post Index Error:', e));
};

export const addIndexedPosts = (posts: kurosearch.Post[]) => {
	if (!idb) {
		return;
	}

	const transaction = idb.transaction(['posts', 'tags'], 'readwrite');
	transaction.addEventListener('error', (e) => console.error('[T] Posts Index Error:', e));
	transaction.addEventListener('abort', (e) => console.error('[T] Posts Index Abort:', e));

	const indexedAt = currentHour();

	for (const post of posts) {
		const postStore = transaction.objectStore('posts');
		const request = postStore.put({ ...post, indexedAt });
		request.addEventListener('error', (e) => console.error('[R] Post Index Error:', e));

		for (const tag of post.tags) {
			const tagStore = transaction.objectStore('tags');
			const tagRequest = tagStore.put(tag);
			tagRequest.addEventListener('error', (e) => console.error('[R] Tag Index Error:', e));
		}
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
