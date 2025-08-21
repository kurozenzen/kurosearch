const initIdb = async (): Promise<IDBDatabase> => {
	return new Promise((resolve, reject) => {
		const tagDbRequest = indexedDB.open('kurosearch', 1);

		tagDbRequest.onsuccess = (event) => {
			resolve((event.target as IDBOpenDBRequest).result);
		};
		tagDbRequest.onerror = (event) => {
			console.error('Error opening tag database:', event);
			reject(event);
		};
		tagDbRequest.onupgradeneeded = (event) => {
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

const tagDb = await initIdb();

export const addIndexedTag = async (tag: kurosearch.Tag): Promise<void> => {
	return new Promise((resolve, reject) => {
		if (!tagDb) {
			return resolve();
		}
		const request = tagDb.transaction('tags', 'readwrite').objectStore('tags').put(tag);
		request.onsuccess = () => resolve();
		request.onerror = (event) => {
			console.error('Error adding tag:', event);
			reject(event);
		};
	});
};

export const getIndexedTag = async (name: string): Promise<kurosearch.Tag | undefined> => {
	return new Promise((resolve) => {
		if (!tagDb) {
			return resolve(undefined);
		}
		tagDb.transaction('tags', 'readonly').objectStore('tags').get(name).onsuccess = (event) => {
			const tag = (event.target as IDBRequest).result;
			resolve(tag);
		};
	});
};
