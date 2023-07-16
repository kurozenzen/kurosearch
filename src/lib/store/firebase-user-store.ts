import type { UserCredential } from 'firebase/auth';
import { persistentWritable } from './persistent-store';
import { StoreKey } from './store-keys';

const createFirebaseUserStore = () => {
	const initial: UserCredential | undefined = undefined;
	const { subscribe, set } = persistentWritable<UserCredential | undefined>(StoreKey.User, initial);
	return { subscribe, set, reset: () => set(initial) };
};

export default createFirebaseUserStore();
