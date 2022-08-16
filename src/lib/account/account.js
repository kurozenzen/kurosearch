import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { writable } from "svelte/store";
import { firebaseAuth } from "../../firebase/firebase";

const googleAuthProvider = new GoogleAuthProvider();

const createAccountStore = () => {
  const initial = { loggedIn: false, user: null };
  const { subscribe, update } = writable(initial);

  onAuthStateChanged(firebaseAuth, (user) => {
    if (user) {
      update((account) => {
        account.loggedIn = true;
        account.user = user;
        return account;
      });
    } else {
      update((account) => {
        account.loggedIn = false;
        account.user = null;
        return account;
      });
    }
  });

  return {
    subscribe,
    async signUpWithEmail(email, password) {
      return createUserWithEmailAndPassword(firebaseAuth, email, password);
    },
    async signInWithEmail(email, password) {
      return signInWithEmailAndPassword(firebaseAuth, email, password);
    },
    async signInWithGoogle() {
      return signInWithPopup(firebaseAuth, googleAuthProvider);
    },
    async signOut() {
      return signOut(firebaseAuth);
    },
  };
};

export default createAccountStore();
