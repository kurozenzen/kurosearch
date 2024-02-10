import { boolParser, boolSerializer, persistentWritable } from '../persistent-store';

export const createBoolStore = (key: string, initial: boolean) => {
	const { subscribe, set } = persistentWritable(key, initial, boolSerializer, boolParser);
	return { subscribe, set, reset: () => set(initial) };
};
