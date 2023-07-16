import {
	GoogleAuthProvider,
	browserLocalPersistence,
	getAuth,
	setPersistence,
	signInWithPopup,
	signOut as signOutFirebase
} from 'firebase/auth';

let googleAuthProvider = new GoogleAuthProvider();
setPersistence(getAuth(), browserLocalPersistence);

export const signIn = async () => signInWithPopup(getAuth(), googleAuthProvider);
export const signOut = async () => signOutFirebase(getAuth());
export const loggedIn = () => getAuth().currentUser !== null;
