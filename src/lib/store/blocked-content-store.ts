import { persistentWritable } from './persistent-store';
import { StoreKey } from './store-keys';

const getInitial = (): Record<kurosearch.BlockingGroup, boolean> => ({
	'AI-Generated': false,
	'Animal-Related': false,
	'Non-Consentual': false,
	Gore: false,
	Scat: false,
	Vore: false,
	Incest: false
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
