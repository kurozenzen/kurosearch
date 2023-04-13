import { ActiveTag } from './ActiveTag'
import { isValidTagType } from '../tag-type/tagtype'
import { isValidCount, isValidName } from './validation'

/**
 * @typedef {import("../tag-modifier/modifier").Modifier} Modifier
 * @typedef {import("../tag-type/tagtype").TagType} TagType
 */

export class Tag {
  /**
   * @param {string} name
   * @param {number} count
   * @param {TagType} type
   */
  constructor(name, count, type) {
    if (!isValidName(name)) {
      throw TypeError('Invalid name passed to Tag constructor')
    }

    if (!isValidCount(count)) {
      throw TypeError('Invalid count passed to Tag constructor')
    }

    if (!isValidTagType(type)) {
      throw TypeError('Invalid type passed to Tag constructor')
    }

    this.name = name
    this.count = count
    this.type = type

    Object.freeze(this)
  }
}

/**
 * @param {Tag} tag
 * @param {Modifier} modifier
 */
export const toActiveTag = (tag, modifier) => {
  return new ActiveTag(modifier, tag.name, tag.count, tag.type)
}
