import { writable } from "svelte/store";
import { ActiveTag } from "../../tags/ActiveTag";

function createActiveTagsStore() {
  /** @type {Array<ActiveTag>} */
  const initial = [];
  const { subscribe, update } = writable(initial);

  return {
    subscribe,
    /**
     * @param {ActiveTag} tag
     */
    addOrReplace: (tag) =>
      update((tags) => {
        const i = tags.findIndex((active) => active.name === tag.name);
        if (i === -1) {
          tags.push(tag);
        } else {
          tags[i] = tag;
        }
        return tags;
      }),

    /** @param {string} name */
    addByName: (name) =>
      update((tags) => {
        tags.push(new ActiveTag("+", name, 0, "general"));
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
