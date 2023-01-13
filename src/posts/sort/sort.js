/**
 * @typedef {"id" | "score" | "updated"} SortProperty
 */

const VALID_SORT_PROPERTIES = Object.freeze(['id', 'score', 'updated'])
export const isValidSortProperty = (value) => {
  return VALID_SORT_PROPERTIES.includes(value)
}
