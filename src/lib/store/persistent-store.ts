import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type SerializerFn<T> = (value: T) => string;
export type ParserFn<T> = (value: string) => T | undefined;

export const defaultParser = JSON.parse;
export const defaultSerializer = JSON.stringify;

export const persistentWritable = <T>(
	key: string,
	initial: T,
	serializer: SerializerFn<T> = defaultSerializer,
	parser: ParserFn<T> = defaultParser
) => {
	const stored = browser ? localStorage.getItem(key) : null;
	const value = getInitialValue(stored, initial, parser);
	const store = writable(value);

	if (browser) {
		store.subscribe((value) => localStorage.setItem(key, serializer(value)));
	}

	return store;
};

const getInitialValue = <T>(stored: string | null, initial: T, parser: ParserFn<T>): T => {
	if (stored === null) {
		return initial;
	}

	try {
		const result = parser(stored);
		if (result === undefined) {
			return initial;
		}

		if (typeof result === 'object' && typeof initial === 'object') {
			return { ...initial, ...result };
		}

		return result;
	} catch {
		return initial;
	}
};
