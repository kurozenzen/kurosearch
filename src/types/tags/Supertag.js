import { validatSearchableTag } from './SearchableTag'
import { isValidName } from './validation'

/**
 * @typedef {import("../definitions").SearchableTag} SearchableTag
 * @typedef {import("../definitions").Supertag} Supertag
 */

/**
 * @param {string} name
 * @param {string} description
 * @param {SearchableTag[]} tags
 * @returns {Supertag}
 */
export const createSupertag = (name, description, tags) => {
  if (!isValidName(name)) {
    throw new TypeError('Invalid name passed to Supertag')
  }

  // NOTE: check disabled because undefined descriptions exist already
  // if (!isValidDescription(description)) {
  //   throw new TypeError("Invalid description passed to Supertag");
  // }

  if (!isArrayOfSearchableTags(tags)) {
    throw new TypeError('Invalid description passed to Supertag')
  }

  return Object.freeze({ name, description, tags: [...tags] })
}

// const isValidDescription = (value) => {
//   return typeof value === "string";
// };

const isArrayOfSearchableTags = (value) => {
  return (
    Array.isArray(value) &&
    value.every((v) => {
      try {
        validatSearchableTag(v)
        return true
      } catch {
        return false
      }
    })
  )
}
