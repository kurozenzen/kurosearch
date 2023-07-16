import { persistentWritable } from './persistent-store';
import { StoreKey } from './store-keys';

const createThemeStore = () => {
	const initial = '1';
	const { subscribe, set } = persistentWritable(StoreKey.ResultColumns, initial);
	return { subscribe, set, reset: () => set(initial) };
};

export default createThemeStore();
