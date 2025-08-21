import { boolParser, boolSerializer, persistentWritable } from './persistent-store';
import { StoreKey } from './store-keys';

const createFullscreenHintDoneStore = () => {
	const initial = false;
	const { subscribe, set } = persistentWritable(
		StoreKey.FullscreenHintDone,
		initial,
		boolSerializer,
		boolParser
	);
	return { subscribe, set, reset: () => set(initial) };
};

export default createFullscreenHintDoneStore();
