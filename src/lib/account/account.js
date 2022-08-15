import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "firebase/auth";
import { writable } from "svelte/store";
import { firebaseAuth } from "../../firebase/firebase";

const googleAuthProvider = new GoogleAuthProvider();

function createAccountStore() {
  const initial = { loggedIn: false, user: null };
  const { subscribe, update } = writable(initial);

  return {
    subscribe,
    async signUpWithEmail(email, password) {
      const userCredential = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );

      update((account) => {
        account.loggedIn = true;
        account.user = userCredential.user;
        return account;
      });
    },
    async signInWithEmail(email, password) {
      const userCredential = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );

      update((account) => {
        account.loggedIn = true;
        account.user = userCredential.user;
        return account;
      });
    },
    async signInWithGoogle() {
      const result = await signInWithPopup(firebaseAuth, googleAuthProvider);

      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      update((account) => {
        account.loggedIn = true;
        account.user = result.user;
        return account;
      });
    },
    async signOut() {
      await signOut(firebaseAuth)
      update((account) => {
        account.loggedIn = false;
        account.user = null;
        return account;
      });
    }
  };
}

export default createAccountStore();
