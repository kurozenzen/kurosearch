import { ALL_BLOCKING_GROUPS } from '$lib/logic/blocking-group-data';
import { persistentWritable } from './persistent-store';
import { StoreKey } from './store-keys';

const getInitial = () =>
	Object.fromEntries(ALL_BLOCKING_GROUPS.map((key) => [key, false])) as Record<
		kurosearch.BlockingGroup,
		boolean
	>;

const createBlockedContentStore = () => {
	const { subscribe, set } = persistentWritable(StoreKey.BlockedContent, getInitial());

	return {
		subscribe,
		set,
		reset: () => set(getInitial())
	};
};

export default createBlockedContentStore();
