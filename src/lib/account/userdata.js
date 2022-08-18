import { onAuthStateChanged } from "firebase/auth";
import { writable } from "svelte/store";
import { firebaseAuth, firestore } from "../../firebase/firebase";
import { collection, deleteDoc, doc, onSnapshot, query, setDoc } from "firebase/firestore";
import { Supertag } from "../../tags/Supertag";
import { SearchableTag } from "../../tags/SearchableTag";

const sha256 = async (value) => {
  const msgBuffer = new TextEncoder().encode(value);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return hashHex;
};

const createAccountStore = () => {
  /**
   * @type {{preferences: any, supertags: Supertag[]}}
   */
  const initial = { preferences: {}, supertags: [] };
  const { subscribe, update } = writable(initial);

  let currentUser;

  let preferencesUnsub = null;
  let supertagsUnsub = null;

  onAuthStateChanged(firebaseAuth, async (user) => {
    currentUser = user;
    if (user) {
      const key = await sha256(user.email);
      preferencesUnsub?.();
      preferencesUnsub = onSnapshot(
        doc(firestore, "users", key),
        async (doc) => {
          const data = doc.data();

          if (data === undefined) {
            update((state) => {
              state.preferences = {};
              return state;
            });
          } else {
            update((state) => {
              state.preferences = data.preferences;
              return state;
            });

            const supertagsQuery = query(
              collection(firestore, `users/${key}/supertags`)
            );
            supertagsUnsub?.();
            supertagsUnsub = onSnapshot(supertagsQuery, (querySnapshot) => {
              const supertags = [];
              querySnapshot.forEach((doc) => {
                const data = doc.data();
                supertags.push(
                  new Supertag(
                    doc.id,
                    data.description,
                    Object.entries(data.tags).map(
                      (e) => new SearchableTag(e[1], e[0])
                    )
                  )
                );
              });
              update((state) => {
                state.supertags = supertags;
                return state;
              });
            });
          }
        }
      );
    } else {
      preferencesUnsub?.();
      supertagsUnsub?.();
      preferencesUnsub = null;
      supertagsUnsub = null;
    }
  });

  return {
    subscribe,

    /**
     * @param {Supertag} supertag
     */
    async addSupertag(supertag) {
      if (!currentUser) {
        throw new Error("No user");
      }

      const key = await sha256(currentUser.email);

      debugger;

      return setDoc(doc(firestore, `users/${key}/supertags`, supertag.name), {
        description: supertag.description,
        tags: Object.fromEntries(
          supertag.tags.map((t) => [t.name, t.modifier])
        ),
      });
    },

    /**
     * @param {Supertag} supertag
     */
     async deleteSupertag(supertag) {
      if (!currentUser) {
        throw new Error("No user");
      }

      const key = await sha256(currentUser.email);

      return deleteDoc(doc(firestore, `users/${key}/supertags`, supertag.name));
    },
  };
};

export default createAccountStore();
