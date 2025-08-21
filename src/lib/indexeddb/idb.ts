let idb: IDBDatabase | undefined;

const initIdb = async (): Promise<IDBDatabase> => {
	return new Promise((resolve, reject) => {
		const dbRequest = indexedDB.open('kurosearch', 1);

		dbRequest.onsuccess = (event) => {
			resolve((event.target as IDBOpenDBRequest).result);
		};
		dbRequest.onerror = (event) => {
			console.error('Error opening tag database:', event);
			reject(event);
		};
		dbRequest.onupgradeneeded = (event) => {
			const db = (event.target as IDBOpenDBRequest).result;
			db.onerror = (event) => {
				console.error('Error during tag database upgrade:', event);
				reject(event);
			};

			const tagStore = db.createObjectStore('tags', { keyPath: 'name' });
			tagStore.createIndex('name', 'name', { unique: true });
			tagStore.createIndex('count', 'count', { unique: false });
			tagStore.createIndex('type', 'type', { unique: false });

			resolve(db);
		};
	});
};

initIdb()
	.then((db) => {
		idb = db;
	})
	.catch((error) => {
		console.error('Failed to initialize IndexedDB:', error);
	});

export const addIndexedTag = async (tag: kurosearch.Tag): Promise<void> => {
	return new Promise((resolve, reject) => {
		if (!idb) {
			return resolve();
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
			return resolve(undefined);
		}
		idb.transaction('tags', 'readonly').objectStore('tags').get(name).onsuccess = (event) => {
			const tag = (event.target as IDBRequest).result;
			resolve(tag);
		};
	});
};
