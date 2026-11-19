import { browser } from '$app/env';
import { NoOpStorage } from './generic/storage-no-op';
import { semiPersistentStorage } from './generic/storage-semi.svelte';

export class PersistentState<T> {
	#storage: Storage;
	#key: string;
	#initial: T;
	value: T;
	#stringify: (value: T) => string;
	#cleanup: () => void;

	constructor(
		storage: Storage,
		key: string,
		initial: T,
		parse: (value: string) => T,
		stringify: (value: T) => string
	) {
		this.#initial = initial;
		this.#key = key;
		this.#storage = storage;
		this.#stringify = stringify;

		const stored = browser ? storage.getItem(key) : null;
		let value = initial;
		if (stored !== null) {
			try {
				const parsed = parse(stored);
				if (typeof stored === 'object' && typeof initial === 'object') {
					value = { ...initial, ...parsed };
				} else {
					value = parsed ?? initial;
				}
			} catch (error) {
				console.warn(`Storage parsing failed for ${key}`, error);
			}
		}

		this.value = $state(value);
		this.#cleanup = $effect.root(() => {
			$effect(() => this.#storage.setItem(this.#key, this.#stringify(this.value)));
		});
	}

	[Symbol.dispose]() {
		this.#cleanup();
	}

	reset() {
		this.value = this.#initial;
	}

	static local<T>(
		key: string,
		initial: T,
		parse: (value: string) => T,
		stringify: (value: T) => string
	) {
		return new PersistentState(
			browser ? localStorage : new NoOpStorage(),
			key,
			initial,
			parse,
			stringify
		);
	}

	static semiJson<T>(key: string, initial: T) {
		return new PersistentState<T>(semiPersistentStorage, key, initial, JSON.parse, JSON.stringify);
	}

	static localBool(key: string, initial: boolean) {
		return new PersistentState(
			browser ? localStorage : new NoOpStorage(),
			key,
			initial,
			(x) => x === 'true',
			(x) => `${x}`
		);
	}

	static localJson<T>(key: string, initial: T) {
		return new PersistentState<T>(semiPersistentStorage, key, initial, JSON.parse, JSON.stringify);
	}

	static localString(key: string, initial: string) {
		return new PersistentState(
			browser ? localStorage : new NoOpStorage(),
			key,
			initial,
			(x) => x,
			(x) => x
		);
	}

	static localNumber(key: string, initial: number) {
		return new PersistentState(
			browser ? localStorage : new NoOpStorage(),
			key,
			initial,
			parseNumber,
			(x) => `${x}`
		);
	}
}

export const parseNumber = (str: string) => {
	let result = Number(str);
	if (!isNaN(result)) {
		return result;
	}

	result = JSON.parse(str);
	if (typeof result === 'number' && !isNaN(result)) {
		return result;
	}

	result = Number(result);
	if (typeof result === 'number' && !isNaN(result)) {
		return result;
	}

	return NaN;
};
