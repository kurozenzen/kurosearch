import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { writable } from 'svelte/store'
import { firebaseAuth } from '../../firebase/firebase'

const googleAuthProvider = new GoogleAuthProvider()

const createAccountStore = () => {
  const initial = { loggedIn: false, user: null }
  const { subscribe, set } = writable(initial)

  class CustomAuthError extends Error {
    /**
     * @param {string} code
     * @param {string} message
     */
    constructor(code, message) {
      super(message)
      this.code = code
    }
  }

  onAuthStateChanged(firebaseAuth, (user) => {
    if (user) {
      set({ loggedIn: true, user })
    } else {
      set(initial)
    }
  })

  return {
    subscribe,
    async signUpWithEmail(email, password) {
      if (password?.length < 8) {
        throw new CustomAuthError("auth/password-too-short")
      }

      return createUserWithEmailAndPassword(firebaseAuth, email, password)
    },
    async signInWithEmail(email, password) {
      return signInWithEmailAndPassword(firebaseAuth, email, password)
    },
    async signInWithGoogle() {
      return signInWithPopup(firebaseAuth, googleAuthProvider)
    },
    async signOut() {
      return signOut(firebaseAuth)
    },
  }
}

export default createAccountStore()
