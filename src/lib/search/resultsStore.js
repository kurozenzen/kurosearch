import { createDependentPersistentStore } from '../common/persistentStore'

/**
 * @typedef {import("../../posts/Page").Page} Page
 * @typedef {import("../../posts/Post").Post} Post
 */

/**
 * @typedef Results
 * @property {null | number} count
 * @property {Post[][]} pages
 * @property {number} nextPage
 * @property {Set<number>} ids
 */

const createResultsStore = () => {
  /** @type {Results} */
  const initial = { count: null, pages: [], nextPage: 0, ids: new Set() }
  const { subscribe, update, set } = createDependentPersistentStore('results', initial)

  return {
    subscribe,
    /**
     * @param {Page} page
     */
    addPage(page) {
      update((results) => {
        const filteredPosts = page.posts.filter((p) => !results.ids.has(p.id))

        filteredPosts.forEach((p) => results.ids.add(p.id))

        return {
          count: page.count,
          pages: [...results.pages, filteredPosts],
          nextPage: results.nextPage + 1,
          ids: results.ids,
        }
      })
    },

    reset() {
      set(initial)
    },
  }
}

export default createResultsStore()
