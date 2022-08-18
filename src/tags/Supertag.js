import { SearchableTag } from "./SearchableTag";
import { isValidName } from "./validation";

export class Supertag {
  /**
   * @param {string} name
   * @param {string} description
   * @param {SearchableTag[]} tags
   */
  constructor(name, description, tags) {
    if (!isValidName(name)) {
      throw new TypeError("Invalid name passed to Supertag");
    }

    // NOTE: check disabled because undefined descriptions exist already
    // if (!isValidDescription(description)) {
    //   throw new TypeError("Invalid description passed to Supertag");
    // }

    if (!isArrayOfSearchableTags(tags)) {
      throw new TypeError("Invalid description passed to Supertag");
    }

    this.name = name;
    this.description = description;
    this.tags = Object.freeze([...tags]);

    Object.freeze(this);
  }
}

// const isValidDescription = (value) => {
//   return typeof value === "string";
// };

const isArrayOfSearchableTags = (value) => {
  return Array.isArray(value) && value.every((v) => v instanceof SearchableTag);
};
