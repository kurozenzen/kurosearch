import { onAuthStateChanged } from "firebase/auth";
import { writable } from "svelte/store";
import { firebaseAuth, firestore } from "../../firebase/firebase";
import { collection, doc, onSnapshot, query } from "firebase/firestore";
import { Supertag } from "../../tags/Supertag";

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

  let preferencesUnsub = null;
  let supertagsUnsub = null;

  onAuthStateChanged(firebaseAuth, async (user) => {
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
                  new Supertag(doc.id, data.desciption, data.tags)
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
  };
};

export default createAccountStore();
