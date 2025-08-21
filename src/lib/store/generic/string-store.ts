import { persistentWritable, stringParser, stringSerializer } from '../persistent-store';

export const createStringStore = (key: string, initial: string) => {
	const { subscribe, set } = persistentWritable(key, initial, stringSerializer, stringParser);
	return { subscribe, set, reset: () => set(initial) };
};
