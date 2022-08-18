/**
 * @typedef {"id" | "score"} SortProperty
 */

const VALID_SORT_PROPERTIES = Object.freeze(["id", "score"]);
export const isValidSortProperty = (value) => {
  return VALID_SORT_PROPERTIES.includes(value);
};
