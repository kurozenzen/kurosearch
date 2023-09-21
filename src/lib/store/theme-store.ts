import { persistentWritable, stringParser, stringSerializer } from './persistent-store';
import { StoreKey } from './store-keys';

const createThemeStore = () => {
	const initial = 'crimson dark';
	const { subscribe, set } = persistentWritable(
		StoreKey.Theme,
		initial,
		stringSerializer,
		stringParser
	);
	return { subscribe, set, reset: () => set(initial) };
};

export default createThemeStore();
