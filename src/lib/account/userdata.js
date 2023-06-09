import { onAuthStateChanged } from 'firebase/auth'
import { writable } from 'svelte/store'
import { firebaseAuth, firestore } from '../../firebase/firebase'
import { collection, deleteDoc, doc, onSnapshot, query, setDoc, updateDoc } from 'firebase/firestore'
import { Supertag } from '../../types/tags/Supertag'
import { SearchableTag } from '../../types/tags/SearchableTag'

/**
 * @typedef {import("../theme/theme").Theme} Theme
 */

const createAccountStore = () => {
  /** @type {{preferences: any, supertags: Supertag[]}}*/
  const initial = { preferences: {}, supertags: [] }
  const { subscribe, update } = writable(initial)

  let currentUser

  let preferencesUnsub = null
  let supertagsUnsub = null

  onAuthStateChanged(firebaseAuth, async (user) => {
    currentUser = user
    if (user) {
      preferencesUnsub = onSnapshot(doc(firestore, 'users', user.uid), async (doc) => {
        const data = doc.data()

        if (data === undefined) {
          update((state) => {
            state.preferences = {}
            return state
          })
        } else {
          update((state) => {
            state.preferences = data.preferences
            return state
          })
        }

        const supertagsQuery = query(collection(firestore, `users/${user.uid}/supertags`))
        supertagsUnsub?.()
        supertagsUnsub = onSnapshot(supertagsQuery, (querySnapshot) => {
          const supertags = []
          querySnapshot.forEach((doc) => {
            const data = doc.data()
            supertags.push(
              new Supertag(
                doc.id,
                data.description,
                Object.entries(data.tags).map((e) => new SearchableTag(e[1], e[0]))
              )
            )
          })
          update((state) => {
            state.supertags = supertags
            return state
          })
        })
      })
    } else {
      preferencesUnsub?.()
      supertagsUnsub?.()
      preferencesUnsub = null
      supertagsUnsub = null
    }
  })

  return {
    subscribe,

    /**
     * @param {Supertag} supertag
     */
    async addSupertag(supertag) {
      if (!currentUser) {
        throw new Error('No user')
      }

      return setDoc(doc(firestore, `users/${currentUser.uid}/supertags`, supertag.name), {
        description: supertag.description,
        tags: Object.fromEntries(supertag.tags.map((t) => [t.name, t.modifier])),
      })
    },

    /**
     * @param {Supertag} newSupertag
     */
    async updateSupertag(oldName, newSupertag) {
      if (!currentUser) {
        throw new Error('No user')
      }

      const result = await setDoc(doc(firestore, `users/${currentUser.uid}/supertags`, newSupertag.name), {
        description: newSupertag.description,
        tags: Object.fromEntries(newSupertag.tags.map((t) => [t.name, t.modifier])),
      })

      if (oldName === newSupertag.name) {
        return result
      }

      return deleteDoc(doc(firestore, `users/${currentUser.uid}/supertags`, oldName))
    },

    /**
     * @param {Supertag} supertag
     */
    async deleteSupertag(supertag) {
      if (!currentUser) {
        throw new Error('No user')
      }

      return deleteDoc(doc(firestore, `users/${currentUser.uid}/supertags`, supertag.name))
    },

    /**
     * @param {Theme} theme
     */
    async setTheme(theme) {
      if (!currentUser) {
        return
      }

      return setDoc(doc(firestore, 'users', currentUser.uid), { preferences: { theme } }, { merge: true })
    },
  }
}

export default createAccountStore()
