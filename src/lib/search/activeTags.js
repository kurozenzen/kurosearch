import { writable } from "svelte/store";

/**
 * @typedef {import("../../types/modifier").ModifiedTag} ModifiedTag
 */

function createActiveTagsStore() {
  /** @type {ModifiedTag[]} */
  const initial = [];
  const { subscribe, update } = writable(initial);

  return {
    subscribe,
    /**
     * @param {ModifiedTag} modifierAndTag
     */
    add: (modifierAndTag) =>
      update((tags) => {
        const i = tags.findIndex(
          (entry) => entry.tag.name === modifierAndTag.tag.name
        );
        if (i === -1) {
          tags.push(modifierAndTag);
        } else {
          tags[i] = modifierAndTag;
        }
        return tags;
      }),

    /** @param {string} name */
    addByName: (name) =>
      update((tags) => {
        tags.push({
          modifier: "+",
          tag: {
            name: name,
            count: 0,
            types: [],
          },
        });
        return tags;
      }),

    /** @param {number} i */
    removeByIndex: (i) =>
      update((tags) => {
        tags.splice(i, 1);
        return tags;
      }),
  };
}

export default createActiveTagsStore();
