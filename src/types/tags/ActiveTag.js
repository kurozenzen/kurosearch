import { isValidModifier } from '../tag-modifier/modifier'
import { isValidTagType } from '../tag-type/tagtype'
import { createSearchableTag } from './SearchableTag'
import { isValidCount, isValidName } from './validation'

/**
 * @typedef {import("../definitions").Modifier} Modifier
 * @typedef {import("../definitions").TagType} TagType
 * @typedef {import("../definitions").ActiveTag} ActiveTag
 * @typedef {import("../definitions").SearchableTag} SearchableTag
 */

/**
 * @param {Modifier} modifier
 * @param {string} name
 * @param {number} count
 * @param {TagType} type
 * @returns {ActiveTag}
 */
export const createActiveTag = (modifier, name, count, type) => {
  if (!isValidModifier(modifier)) {
    throw TypeError('Invalid modifier passed to ActiveTag constructor')
  }

  if (!isValidName(name)) {
    throw TypeError('Invalid name passed to ActiveTag constructor')
  }

  if (!isValidCount(count)) {
    throw TypeError('Invalid count passed to ActiveTag constructor')
  }

  if (!isValidTagType(type)) {
    throw TypeError('Invalid type passed to ActiveTag constructor')
  }

  return Object.freeze({ modifier, name, count, type })
}

/**
 * @param {ActiveTag} tag
 * @returns {SearchableTag}
 */
export const createSearchableTagFromActiveTag = (tag) => {
  return createSearchableTag(tag.modifier, tag.name)
}
