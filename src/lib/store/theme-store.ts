import { persistentWritable } from './persistent-store';

const createThemeStore = () => {
	const initial = 'crimson dark';
	const { subscribe, set } = persistentWritable('kurosearch:theme', initial);
	return { subscribe, set, reset: () => set(initial) };
};

export default createThemeStore();
