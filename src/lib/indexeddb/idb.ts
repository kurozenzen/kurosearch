const COMMENT_LIFETIME_HOURS = 48;
const POST_LIFETIME_HOURS = 48;

let idb: IDBDatabase | undefined;

const cleanOldComments = async () =>
	new Promise<void>((resolve) => {
		if (!idb) {
			resolve();
			return;
		}
		const transaction = idb.transaction('comments', 'readwrite');
		const store = transaction.objectStore('comments');
		const index = store.index('indexedAt');
		const threshold = new Date().getTime() / 1000 / 60 / 60 - COMMENT_LIFETIME_HOURS;
		const range = IDBKeyRange.upperBound(threshold);
		const request = index.openCursor(range);
		request.onsuccess = (event) => {
			const cursor = (event.target as IDBRequest).result;
			if (cursor) {
				store.delete(cursor.primaryKey);
				cursor.continue();
			}
		};
		transaction.oncomplete = () => resolve();
		transaction.onerror = (event) => {
			console.error('Error cleaning old comments:', event);
			resolve();
		};
	});

const cleanOldPosts = async () =>
	new Promise<void>((resolve) => {
		if (!idb) {
			resolve();
			return;
		}
		const transaction = idb.transaction('posts', 'readwrite');
		const store = transaction.objectStore('posts');
		const index = store.index('indexedAt');
		const threshold = new Date().getTime() / 1000 / 60 / 60 - POST_LIFETIME_HOURS;
		const range = IDBKeyRange.upperBound(threshold);
		const request = index.openCursor(range);
		request.onsuccess = (event) => {
			const cursor = (event.target as IDBRequest).result;
			if (cursor) {
				store.delete(cursor.primaryKey);
				cursor.continue();
			}
		};
		transaction.oncomplete = () => resolve();
		transaction.onerror = (event) => {
			console.error('Error cleaning old posts:', event);
			resolve();
		};
	});

const initIdb = async (): Promise<IDBDatabase> => {
	return new Promise((resolve, reject) => {
		const dbRequest = indexedDB.open('kurosearch', 2);

		dbRequest.onsuccess = (event) => resolve((event.target as IDBOpenDBRequest).result);
		dbRequest.onerror = (event) => {
			console.error('Error opening tag database:', event);
			reject(event);
		};
		dbRequest.onupgradeneeded = (event) => {
			const db = (event.target as IDBOpenDBRequest).result;
			const transaction = (event.target as IDBOpenDBRequest).transaction!;
			db.onerror = (event) => {
				console.error('Error during tag database upgrade:', event);
				reject(event);
			};

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
					let postStore = db.createObjectStore('posts', { keyPath: 'id' });
					postStore.createIndex('indexedAt', 'indexedAt', { unique: false });
				} catch (e) {
					reject(e);
				}
			}

			transaction.oncomplete = () => resolve(db);
			transaction.onerror = (event) => {
				console.error('Error during tag database upgrade transaction:', event);
				reject(event);
			};
		};
	});
};

initIdb()
	.then((db) => {
		idb = db;
	})
	.then(() => cleanOldPosts())
	.then(() => cleanOldComments())
	.catch((error) => {
		console.error('Failed to initialize IndexedDB:', error);
	});

export const addIndexedTag = async (tag: kurosearch.Tag): Promise<void> => {
	return new Promise((resolve, reject) => {
		if (!idb) {
			resolve();
			return;
		}
		const request = idb.transaction('tags', 'readwrite').objectStore('tags').put(tag);
		request.onsuccess = () => resolve();
		request.onerror = (event) => {
			console.error('Error adding tag:', event);
			reject(event);
		};
	});
};

export const getIndexedTag = async (name: string): Promise<kurosearch.Tag | undefined> => {
	return new Promise((resolve) => {
		if (!idb) {
			resolve(undefined);
			return;
		}
		idb.transaction('tags', 'readonly').objectStore('tags').get(name).onsuccess = (event) => {
			const tag = (event.target as IDBRequest).result;
			resolve(tag);
		};
	});
};

export const addIndexedComments = async (
	post_id: number,
	comments: kurosearch.Comment[]
): Promise<void> => {
	return new Promise((resolve, reject) => {
		if (!idb) {
			resolve();
			return;
		}
		const request = idb
			.transaction('comments', 'readwrite')
			.objectStore('comments')
			.put({
				postId: post_id,
				comments: comments,
				indexedAt: Math.round(new Date().getTime() / 1000 / 60 / 60) // store in hours
			});
		request.onsuccess = () => resolve();
		request.onerror = (event) => {
			console.error('Error adding comments:', event);
			reject(event);
		};
	});
};

export const getIndexedComments = async (
	postId: number
): Promise<kurosearch.Comment[] | undefined> => {
	return new Promise((resolve) => {
		if (!idb) {
			resolve(undefined);
			return;
		}
		idb.transaction('comments', 'readonly').objectStore('comments').get(postId).onsuccess = (
			event
		) => {
			const commentsWithPostId = (event.target as IDBRequest).result;
			if (commentsWithPostId === undefined) {
				resolve(undefined);
			} else {
				const comments: kurosearch.Comment[] = commentsWithPostId.comments;
				resolve(comments);
			}
		};
	});
};

export const addIndexedPost = async (post: kurosearch.Post): Promise<void> => {
	return new Promise((resolve, reject) => {
		if (!idb) {
			resolve();
			return;
		}

		const request = idb
			.transaction('posts', 'readwrite')
			.objectStore('posts')
			.put({
				...post,
				indexedAt: Math.round(new Date().getTime() / 1000 / 60 / 60) // store in hours
			});

		request.onsuccess = () => resolve();
		request.onerror = (event) => {
			console.error('Error indexing post:', event);
			reject(event);
		};
	});
};

export const getIndexedPost = async (id: number): Promise<kurosearch.Post | undefined> => {
	return new Promise((resolve) => {
		if (!idb) {
			resolve(undefined);
			return;
		}
		idb.transaction('posts', 'readonly').objectStore('posts').get(id).onsuccess = (event) => {
			const post = (event.target as IDBRequest).result;
			resolve(post);
		};
	});
};
