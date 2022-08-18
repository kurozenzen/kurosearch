import { PAGE_SIZE } from "../../api-client/pages/pages";
import { derived, writable } from "svelte/store";

/**
 * @typedef {import("../../posts/Page").Page} Page
 * @typedef {import("../../posts/Post").Post} Post
 * @typedef {{ count: null | number, pages: Post[][], nextPage: number }} Results
 */

const createResultsStore = () => {
  /** @type {Results} */
  const initial = { count: null, pages: [], nextPage: 0 };
  const { subscribe, update, set } = writable(initial);

  return {
    subscribe,
    /**
     * @param {Page} page
     */
    addPage(page) {
      update((results) => {
        results.count = page.count;
        results.pages.push(page.posts);
        results.nextPage = results.nextPage + 1;
        return results;
      });
    },

    reset() {
      set(initial);
    },
  };
};

export default createResultsStore();
