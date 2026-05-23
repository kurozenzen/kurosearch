import { browser } from '$app/environment';

export type IndexedPost = kurosearch.Post & { indexedAt: Date };

const COMMENT_LIFETIME_HOURS = 48;
const POST_LIFETIME_HOURS = 48;

let idb: IDBDatabase | undefined;

const currentHour = () => Math.round(new Date().getTime() / 1000 / 60 / 60);

const ignoreInvalidStateError = (action: () => void) => {
	try {
		action();
	} catch (error) {
		if (error instanceof DOMException && error.name === 'InvalidStateError') {
			console.log('Ignoring IDB Error:', error);
			return;
		}

		throw error;
	}
};

export const initIdb = async () => {
	console.log('Initializing IndexedDB...');
	try {
		return ensureIdb()
			.then((db) => {
				idb = db;
				console.log('Success');
			})
			.catch((error) => console.error('Failed to initialize IndexedDB:', error))
			.then(clean)
			.catch((error) => console.error('Failed to clean IndexedDB:', error));
	} catch (error) {
		console.error('Unexpected error during IndexedDB initialization:', error);
	}
};

const clean = async () =>
	new Promise<void>((resolve) => {
		console.log('Cleaning IndexedDB...');
		if (!idb) {
			resolve();
			console.log('No IndexedDB instance, skipping clean.');
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
			console.log('Done');
		});
	});

const ensureIdb = async (): Promise<IDBDatabase> => {
	if (!browser) {
		return Promise.resolve(null as unknown as IDBDatabase);
	}

	return new Promise((resolve, reject) => {
		const version = 4;
		console.log('Opening IndexedDB with version', version);
		const request = indexedDB.open('kurosearch', version);
		request.addEventListener('success', (e) => resolve((e.target as IDBRequest).result));
		request.addEventListener('error', (e) => reject(e));
		request.addEventListener('blocked', () => reject(new Error('IDB open blocked')));
		request.addEventListener('upgradeneeded', (event) => {
			const db = (event.target as IDBOpenDBRequest).result;
			db.addEventListener('versionchange', () => {
				db.close();
				console.log('IDB version change detected, closing database');
				window.location.reload();
			});

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
					console.log('Creating tags object store');
					db.createObjectStore('tags', { keyPath: 'name' });
				} catch (e) {
					reject(e);
				}
			}

			if (!db.objectStoreNames.contains('comments')) {
				try {
					console.log('Creating comments object store');
					const commentStore = db.createObjectStore('comments', { keyPath: 'postId' });
					commentStore.createIndex('indexedAt', 'indexedAt', { unique: false });
				} catch (e) {
					reject(e);
				}
			}

			if (!db.objectStoreNames.contains('posts')) {
				try {
					console.log('Creating posts object store');
					const postStore = db.createObjectStore('posts', { keyPath: 'id' });
					postStore.createIndex('indexedAt', 'indexedAt', { unique: false });
				} catch (e) {
					reject(e);
				}
			}

			if (!db.objectStoreNames.contains('favourite_posts')) {
				try {
					console.log('Creating favourite_posts object store');
					const favouritePostStore = db.createObjectStore('favourite_posts', { keyPath: 'id' });
					favouritePostStore.createIndex('indexedAt', 'indexedAt', { unique: false });
				} catch (e) {
					reject(e);
				}
			}
		});
	});
};

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
		ignoreInvalidStateError(() => {
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
	});

export const getIndexedComments = async (
	postId: number
): Promise<kurosearch.Comment[] | undefined> =>
	new Promise((resolve) => {
		ignoreInvalidStateError(() => {
			if (!idb) {
				resolve(undefined);
				return;
			}

			const transaction = idb.transaction('comments', 'readonly');
			transaction.addEventListener('error', () => resolve(undefined));
			transaction.addEventListener('abort', () => resolve(undefined));

			const request = transaction.objectStore('comments').get(postId);

			request.addEventListener('success', (e) =>
				resolve((e.target as IDBRequest).result?.comments)
			);
		});
	});

export const getIndexedPost = async (id: number): Promise<kurosearch.Post | undefined> =>
	new Promise((resolve) => {
		ignoreInvalidStateError(() => {
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
	});

export const getAllTags = async (): Promise<kurosearch.Tag[]> =>
	new Promise((resolve) => {
		ignoreInvalidStateError(() => {
			if (!idb) {
				resolve([]);
				return;
			}
			const transaction = idb.transaction('tags', 'readonly');
			transaction.addEventListener('error', () => resolve([]));
			transaction.addEventListener('abort', () => resolve([]));

			const request = transaction.objectStore('tags').getAll();
			request.addEventListener('success', (e) => resolve((e.target as IDBRequest).result));
		});
	});

export const getAllPosts = async (): Promise<kurosearch.Post[]> =>
	new Promise((resolve) => {
		ignoreInvalidStateError(() => {
			if (!idb) {
				resolve([]);
				return;
			}
			const transaction = idb.transaction('posts', 'readonly');
			transaction.addEventListener('error', () => resolve([]));
			transaction.addEventListener('abort', () => resolve([]));

			const request = transaction.objectStore('posts').getAll();
			request.addEventListener('success', (e) => resolve((e.target as IDBRequest).result));
		});
	});

export const getAllFavouritePosts = async (): Promise<IndexedPost[]> =>
	new Promise((resolve) => {
		ignoreInvalidStateError(() => {
			if (!idb) {
				resolve([]);
				return;
			}
			const transaction = idb.transaction('favourite_posts', 'readonly');
			transaction.addEventListener('error', () => resolve([]));
			transaction.addEventListener('abort', () => resolve([]));

			const request = transaction.objectStore('favourite_posts').getAll();
			request.addEventListener('success', (e) => resolve((e.target as IDBRequest).result));
		});
	});

export const addFavouritePost = (post: kurosearch.Post) => {
	if (!idb) {
		return;
	}

	const transaction = idb.transaction('favourite_posts', 'readwrite');
	transaction.addEventListener('error', (e) => console.error('[T] Favourite Post Error:', e));
	transaction.addEventListener('abort', (e) => console.error('[T] Favourite Post Abort:', e));

	const indexedAt = currentHour();

	const postStore = transaction.objectStore('favourite_posts');
	const request = postStore.put({ ...post, indexedAt });
	request.addEventListener('error', (e) => console.error('[R] Post Index Error:', e));
};

export const removeFavouritePost = (id: number) => {
	if (!idb) {
		return;
	}

	const transaction = idb.transaction('favourite_posts', 'readwrite');
	transaction.addEventListener('error', (e) => console.error('[T] Favourite Post Error:', e));
	transaction.addEventListener('abort', (e) => console.error('[T] Favourite Post Abort:', e));

	const postStore = transaction.objectStore('favourite_posts');
	const request = postStore.delete(id);
	request.addEventListener('error', (e) => console.error('[R] Post Index Error:', e));
};
