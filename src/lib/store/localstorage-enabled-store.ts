import { persistentWritable } from './persistent-store';

const createActiveTagsStore = () => {
	const initial = false;
	const { subscribe, set } = persistentWritable('kurosearch:localstorage-enabled', initial);
	return { subscribe, set, reset: () => set(initial) };
};

export default createActiveTagsStore();
