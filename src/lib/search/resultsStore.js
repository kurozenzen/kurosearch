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

/**
 * @param {Results} value
 * @returns {string}
 */
const serializer = (value) => {
  const simplified = {
    count: value.count,
    pages: value.pages,
    nextPage: value.nextPage,
    ids: [...value.ids.values()],
  }
  return JSON.stringify(simplified)
}

/**
 * @param {string} value
 * @returns {Results}
 */
const parser = (value) => {
  const parsed = JSON.parse(value)
  return {
    count: parsed.count,
    pages: parsed.pages,
    nextPage: parsed.nextPage,
    ids: new Set(parsed.ids),
  }
}

/** @returns {Results} */
const getInitialResults = () => ({ count: null, pages: [], nextPage: 0, ids: new Set() })

const createResultsStore = () => {
  const { subscribe, update, set } = createDependentPersistentStore('results', getInitialResults(), serializer, parser)

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
      set(getInitialResults())
    },
  }
}

export default createResultsStore()
