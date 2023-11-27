import { boolParser, boolSerializer, persistentWritable } from './persistent-store';
import { StoreKey } from './store-keys';

const createHighResolutionEnabledStore = () => {
	const initial = false;
	const { subscribe, set } = persistentWritable(
		StoreKey.HighResolutionEnabled,
		initial,
		boolSerializer,
		boolParser
	);
	return { subscribe, set, reset: () => set(initial) };
};

export default createHighResolutionEnabledStore();
