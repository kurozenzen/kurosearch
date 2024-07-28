import { boolParser, boolSerializer, persistentWritable } from './persistent-store';
import { StoreKey } from './store-keys';

const createHighResolutionMultiColEnabledStore = () => {
	const initial = false;
	const { subscribe, set } = persistentWritable(
		StoreKey.HighResolutionMultiColEnabled,
		initial,
		boolSerializer,
		boolParser
	);
	return { subscribe, set, reset: () => set(initial) };
};

export default createHighResolutionMultiColEnabledStore();
