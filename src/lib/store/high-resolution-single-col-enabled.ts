import { boolParser, boolSerializer, persistentWritable } from './persistent-store';
import { StoreKey } from './store-keys';

const createHighResolutionSingleColEnabledStore = () => {
	const initial = false;
	const { subscribe, set } = persistentWritable(
		StoreKey.HighResolutionSingleColEnabled,
		initial,
		boolSerializer,
		boolParser
	);
	return { subscribe, set, reset: () => set(initial) };
};

export default createHighResolutionSingleColEnabledStore();
