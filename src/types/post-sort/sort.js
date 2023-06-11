/**
 * @typedef {import("../definitions").SortProperty} SortProperty
 */

const VALID_SORT_PROPERTIES = Object.freeze(['id', 'score', 'updated'])

/**
 * @param {unknown} value
 */
export const isValidSortProperty = (value) => {
  return typeof value == 'string' && VALID_SORT_PROPERTIES.includes(value)
}
