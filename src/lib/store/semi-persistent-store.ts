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
		const enabled = localStorage.getItem('kurosearch:localstorage-enabled') === 'true';
		storage = enabled ? localStorage : sessionStorage;
	}

	const stored = browser && storage ? storage.getItem(key) : null;
	const loaded = getInitialValue(initial, stored, parser);
	const store = writable(loaded);

	if (browser) {
		store.subscribe((value) => {
			sessionStorage.setItem(key, serializer(value));
			localStorage.setItem(key, serializer(value));
		});
	}

	return store;
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
