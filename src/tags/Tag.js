import { ActiveTag } from './ActiveTag'
import { isValidTagType } from './type/tagtype'
import { isValidCount, isValidName } from './validation'

/**
 * @typedef {import("./modifier/modifier").Modifier} Modifier
 * @typedef {import("./type/tagtype").TagType} TagType
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

  toActiveTag(modifier) {
    return new ActiveTag(modifier, this.name, this.count, this.type)
  }
}
