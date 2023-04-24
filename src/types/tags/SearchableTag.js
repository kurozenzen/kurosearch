import { isValidModifier, serializeModifier } from '../tag-modifier/modifier'
import { isValidName } from './validation'

/**
 * @typedef {import("../tag-modifier/modifier").Modifier} Modifier
 * @typedef {import("../tag-type/tagtype").TagType} TagType
 */

export class SearchableTag {
  /**
   * @param {Modifier} modifier
   * @param {string} name
   */
  constructor(modifier, name) {
    if (!isValidModifier(modifier)) {
      throw TypeError('Invalid modifier passed to SearchableTag constructor')
    }

    if (!isValidName(name)) {
      throw TypeError('Invalid name passed to SearchableTag constructor')
    }

    this.modifier = modifier
    this.name = name

    Object.freeze(this)
  }

  serialize() {
    return `${serializeModifier(this.modifier)}${encodeURIComponent(this.name.replaceAll(' ', '_'))}`
  }
}
