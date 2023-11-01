import { boolParser, boolSerializer, persistentWritable } from './persistent-store';
import { StoreKey } from './store-keys';

const createCookiesAcceptedStore = () => {
	const initial = false;
	const { subscribe, set } = persistentWritable(
		StoreKey.CookiesAccepted,
		initial,
		boolSerializer,
		boolParser
	);
	return { subscribe, set, reset: () => set(initial) };
};

export default createCookiesAcceptedStore();
