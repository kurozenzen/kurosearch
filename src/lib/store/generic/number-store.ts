import { persistentWritable } from '../persistent-store';

export const createNumberStore = (key: string, initial: number) => {
	const { subscribe, set } = persistentWritable(key, initial);
	return { subscribe, set, reset: () => set(initial) };
};
