import { persistentWritable, stringParser, stringSerializer } from './persistent-store';
import { StoreKey } from './store-keys';

const createStore = () => {
	const initial = '';
	const { subscribe, set } = persistentWritable(
		StoreKey.ApiKey,
		initial,
		stringSerializer,
		stringParser
	);
	return { subscribe, set, reset: () => set(initial) };
};

export default createStore();
