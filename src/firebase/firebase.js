import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { browserLocalPersistence, getAuth, setPersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyBHdepwE7M4Byu2lFtX2s__9COcMdvXu7Q',
  authDomain: 'r34-react.firebaseapp.com',
  databaseURL: 'https://r34-react.firebaseio.com',
  projectId: 'r34-react',
  storageBucket: 'r34-react.appspot.com',
  messagingSenderId: '844749417844',
  appId: '1:844749417844:web:3d1a590b58568e472dd021',
  measurementId: 'G-H9MD9SS1LS',
}

export const firebaseApp = initializeApp(config)
export const firebaseAuth = getAuth(firebaseApp)
setPersistence(firebaseAuth, browserLocalPersistence)
export const firestore = getFirestore(firebaseApp)
export const analytics = getAnalytics()
