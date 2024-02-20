import { ALL_BLOCKING_GROUPS } from '$lib/logic/blocking-group-data';
import { persistentWritable } from './persistent-store';
import { StoreKey } from './store-keys';

const getInitial = () => ({
	Loli: true,
	'Animal-Related': false,
	'Non-Consentual': false,
	Gore: false,
	Scat: false
});

const createBlockedContentStore = () => {
	const { subscribe, set } = persistentWritable(StoreKey.BlockedContent, getInitial());

	return {
		subscribe,
		set,
		reset: () => set(getInitial())
	};
};

export default createBlockedContentStore();
