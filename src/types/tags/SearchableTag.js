import { isValidModifier, serializeModifier } from '../tag-modifier/modifier'
import { isValidName } from './validation'

/**
 * @typedef {import("../definitions").Modifier} Modifier
 * @typedef {import("../definitions").TagType} TagType
 * @typedef {import("../definitions").SearchableTag} SearchableTag
 */

/**
 * @param {Modifier} modifier
 * @param {string} name
 * @returns {SearchableTag}
 */
export const createSearchableTag = (modifier, name) => {
  let tag = Object.freeze({ modifier, name });
  validatSearchableTag(tag)

  return tag;
}

/**
 * @param {any} object
 */
export const validatSearchableTag = (object) => {
  if (!isValidModifier(object.modifier)) {
    throw TypeError('Invalid modifier passed to SearchableTag constructor')
  }

  if (!isValidName(object.name)) {
    throw TypeError('Invalid name passed to SearchableTag constructor')
  }
}

/**
 * @param {SearchableTag} tag
 * @returns {string}
 */
export const serializeSearchableTag = (tag) => {
  return `${serializeModifier(tag.modifier)}${encodeURIComponent(tag.name.replaceAll(' ', '_'))}`
}
