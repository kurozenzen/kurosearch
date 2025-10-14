import {
	defaultParser,
	defaultSerializer,
	type ParserFn,
	type SerializerFn
} from './persistent-store';
import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const semiPersistentWritable = <T>(
	key: string,
	initial: T,
	serializer: SerializerFn<T> = defaultSerializer,
	parser: ParserFn<T> = defaultParser
) => {
	let storage = undefined;

	if (browser) {
		let enabled = true;
		try {
			const flag = window.localStorage.getItem('Kurosearch:localstorage-enabled');
			if (flag !== null) enabled = flag === 'true';
		} catch {
			enabled = true;
		}
		storage = enabled ? window.localStorage : window.sessionStorage;
	}

	const stored = browser && storage ? storage.getItem(key) : null;
	const loaded = getInitialValue(initial, stored, parser);
	const store = writable(loaded);

	// Debounce storage writes to reduce I/O
	let debounceTimer: ReturnType<typeof setTimeout> | undefined;
	const debouncedWrite = (value: T) => {
		if (debounceTimer) clearTimeout(debounceTimer);
		debounceTimer = setTimeout(() => {
			if (browser && storage) {
				storage.setItem(key, serializer(value));
			}
		}, 200);
	};

	return {
		subscribe: store.subscribe,
		set: (v: T) => {
			store.set(v);
			debouncedWrite(v);
		},
		update: (fn: (v: T) => T) => {
			store.update((cur) => {
				const v = fn(cur);
				debouncedWrite(v);
				return v;
			});
		}
	};
};

const getInitialValue = <T>(initial: T, stored: string | null, parser: ParserFn<T>) => {
	if (stored === null) {
		return initial;
	}

	try {
		const result = parser(stored);

		if (result === undefined) {
			return initial;
		}

		if (!Array.isArray(result) && typeof result === 'object' && typeof initial === 'object') {
			return { ...initial, ...result };
		}

		return result;
	} catch {
		return initial;
	}
};

export { defaultSerializer } from './persistent-store';
