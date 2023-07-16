import { ALL_BLOCKING_GROUPS } from '$lib/logic/blocking-group-data';
import { persistentWritable } from './persistent-store';

const getInitial = () => Object.fromEntries(ALL_BLOCKING_GROUPS.map((key) => [key, false]));

const createBlockedContentStore = () => {
	const { subscribe, set } = persistentWritable('kurosearch:blocked-content', getInitial());

	return {
		subscribe,
		set,
		reset: () => set(getInitial())
	};
};

export default createBlockedContentStore();
