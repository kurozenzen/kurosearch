import { boolParser, boolSerializer, persistentWritable } from './persistent-store';
import { StoreKey } from './store-keys';

const createAlwaysLoopStore = () => {
	const initial = false;
	const { subscribe, set } = persistentWritable(
		StoreKey.AlwaysLoop,
		initial,
		boolSerializer,
		boolParser
	);
	return { subscribe, set, reset: () => set(initial) };
};

export default createAlwaysLoopStore();
