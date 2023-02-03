import { isValidModifier, serializeModifier } from './modifier/modifier'
import { SearchableTag } from './SearchableTag'
import { isValidTagType } from './type/tagtype'
import { isValidCount, isValidName } from './validation'

/**
 * @typedef {import("./modifier/modifier").Modifier} Modifier
 * @typedef {import("./type/tagtype").TagType} TagType
 */

export class ActiveTag {
  /**
   * @param {Modifier} modifier
   * @param {string} name
   * @param {number} count
   * @param {TagType} type
   */
  constructor(modifier, name, count, type) {
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

    this.modifier = modifier
    this.name = name
    this.count = count
    this.type = type

    Object.freeze(this)
  }
}
/**
 * @param {ActiveTag} tag
 */
export const toSearchableTag = (tag) => {
  return new SearchableTag(tag.modifier, tag.name)
}
