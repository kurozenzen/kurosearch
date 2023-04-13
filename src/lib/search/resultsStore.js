import { createDependentPersistentStore } from '../common/persistentStore'

/**
 * @typedef {import("../../types/page/Page").Page} Page
 * @typedef {import("../../types/post/Post").Post} Post
 */

/**
 * @typedef Results
 * @property {Post[][]} pages
 * @property {number} nextPage
 * @property {Set<number>} ids
 */

/** @returns {Results} */
const getInitialResults = () => ({
  pages: [],
  nextPage: 0,
  ids: new Set(),
})

/**
 * @param {Results} value
 * @returns {string}
 */
const serializer = (value) => {
  const simplified = {
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
    pages: parsed.pages,
    nextPage: parsed.nextPage,
    ids: new Set(parsed.ids),
  }
}

const createResultsStore = () => {
  const { subscribe, update, set } = createDependentPersistentStore('results', getInitialResults(), serializer, parser)

  return {
    subscribe,
    /** @param {Post[]} page */
    addPage(page) {
      update((results) => {
        const filteredPosts = page.filter((p) => !results.ids.has(p.id))

        filteredPosts.forEach((p) => results.ids.add(p.id))

        return {
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
