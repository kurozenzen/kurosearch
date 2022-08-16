import { isValidModifier, serializeModifier } from "./modifier/modifier";
import { SearchableTag } from "./SearchableTag";
import { isValidTagType } from "./type/tagtype";
import { isValidName } from "./validation";

/**
 * @typedef {import("./modifier/modifier").Modifier} Modifier
 * @typedef {import("./type/tagtype").TagType} TagType
 */

export class Supertag {
  /**
   * @param {string} name
   * @param {string} description
   * @param {Record<string, Modifier>} tags
   */
  constructor(name, description, tags) {
    this.name = name;
    this.description = description;
    this.tags = tags;

    Object.freeze(this);
  }

  toSearchableTag() {
    return Object.entries(this.tags).map((e) => new SearchableTag(e[1], e[0]));
  }
}
