import { writable } from 'svelte/store'

/**
 * @typedef {import("../../posts/Page").Page} Page
 * @typedef {import("../../posts/Post").Post} Post
 * @typedef {{ count: null | number, pages: Post[][], nextPage: number, ids: Set<number> }} Results
 */

const createResultsStore = () => {
  /** @type {Results} */
  const initial = { count: null, pages: [], nextPage: 0, ids: new Set() }
  const { subscribe, update, set } = writable(initial)

  return {
    subscribe,
    /**
     * @param {Page} page
     */
    addPage(page) {
      update((results) => {
        const filteredPosts = page.posts.filter(p => !results.ids.has(p.id))

        filteredPosts.forEach(p => results.ids.add(p.id))

        return {
          count: page.count,
          pages: [...results.pages, filteredPosts],
          nextPage: results.nextPage + 1,
          ids: results.ids
        }
      })
    },

    reset() {
      set(initial)
    },
  }
}

export default createResultsStore()
