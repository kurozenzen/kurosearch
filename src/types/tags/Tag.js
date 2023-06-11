import { createActiveTag } from './ActiveTag'
import { isValidTagType } from '../tag-type/tagtype'
import { isValidCount, isValidName } from './validation'

/**
 * @typedef {import("../definitions").Modifier} Modifier
 * @typedef {import("../definitions").TagType} TagType
 * @typedef {import("../definitions").Tag} Tag
 * @typedef {import("../definitions").ActiveTag} ActiveTag
 */

/**
 * @param {string} name
 * @param {number} count
 * @param {TagType} type
 * @returns {Tag}
 */
export const createTag = (name, count, type) => {
  if (!isValidName(name)) {
    throw TypeError('Invalid name passed to Tag constructor')
  }

  if (!isValidCount(count)) {
    throw TypeError('Invalid count passed to Tag constructor')
  }

  if (!isValidTagType(type)) {
    throw TypeError('Invalid type passed to Tag constructor')
  }

  return Object.freeze({ name, count, type })
}

/**
 * @param {Tag} tag
 * @param {Modifier} modifier
 * @returns {ActiveTag}
 */
export const createActiveTagFromTag = (tag, modifier) => {
  return createActiveTag(modifier, tag.name, tag.count, tag.type)
}
