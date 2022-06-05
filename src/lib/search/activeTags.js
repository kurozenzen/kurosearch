import { writable } from "svelte/store";

function createActiveTagsStore() {
  /** @type {import("../../types/tag").Tag[]} */
  const initial = [];
  const { subscribe, update } = writable(initial);

  return {
    subscribe,
    /** @param {import("../../types/tag").Tag} tag */
    add: (tag) =>
      update((tags) => {
        const i = tags.findIndex((t) => t.name == tag.name);
        if (i === -1) {
          tags.push(tag);
        } else {
          tags[i] = tag;
        }
        return tags;
      }),
    addByName: (name) =>
      update((tags) => {
        tags.push({ name: name, count: 0, types: [] });
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
