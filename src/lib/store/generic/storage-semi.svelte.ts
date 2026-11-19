import { browser } from '$app/env';
import { StorageKey } from '../storage-keys';
import { NoOpStorage } from './storage-no-op';

class SemiPersistentStorage implements Storage {
	localStorageEnabled: boolean;
	#storage: Storage;
	length: number;
	#cleanup: () => void;

	constructor() {
		const enabled = localStorage.getItem(StorageKey.LocalStorageEnabled) === 'true';
		this.localStorageEnabled = $state(enabled);
		this.#storage = $derived(this.localStorageEnabled ? localStorage : sessionStorage);
		this.length = $derived(this.#storage.length);
		this.#cleanup = $effect.root(() => {
			$effect(() => {
				localStorage.setItem(StorageKey.LocalStorageEnabled, `${this.localStorageEnabled}`);
			});
		});
	}

	[Symbol.dispose]() {
		this.#cleanup();
	}

	clear(): void {
		throw new TypeError('Unsupported Operation. Use real storages to clear data');
	}
	getItem(key: string): string | null {
		return this.#storage.getItem(key);
	}
	key(index: number): string | null {
		return this.#storage.key(index);
	}
	removeItem(key: string): void {
		return this.#storage.removeItem(key);
	}
	setItem(key: string, value: string): void {
		localStorage.setItem(key, value);
		sessionStorage.setItem(key, value);
	}
}

export const semiPersistentStorage = browser
	? new SemiPersistentStorage()
	: (new NoOpStorage() as unknown as SemiPersistentStorage);
