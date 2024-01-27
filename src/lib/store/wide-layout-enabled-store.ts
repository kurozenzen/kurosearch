import { boolParser, boolSerializer, persistentWritable } from './persistent-store';
import { StoreKey } from './store-keys';

const createWideLayoutEnabledStore = () => {
	const initial = false;
	const { subscribe, set } = persistentWritable(
		StoreKey.WideLayoutEnabled,
		initial,
		boolSerializer,
		boolParser
	);
	return { subscribe, set, reset: () => set(initial) };
};

export default createWideLayoutEnabledStore();
