import { writable } from 'svelte/store';
import '$lib/logic/firebase/firebase';
import { getAuth } from 'firebase/auth';

const createFirebaseLoginStore = () => {
	const store = writable(false);

	getAuth().onAuthStateChanged((user) => {
		store.set(user !== null);
	});

	return store;
};

export default createFirebaseLoginStore();
