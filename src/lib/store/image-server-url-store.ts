import { persistentWritable, stringParser, stringSerializer } from './persistent-store';
import { StoreKey } from './store-keys';

const createImageServerUrlStore = () => {
	const initial = 'img.rule34.xxx';
	const { subscribe, set } = persistentWritable(
		StoreKey.ImageServerUrl,
		initial,
		stringSerializer,
		stringParser
	);
	return { subscribe, set, reset: () => set(initial) };
};

export default createImageServerUrlStore();
