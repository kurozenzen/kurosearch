/**
 * @typedef {import("../../tags/modifier/modifier").ModifiedTag} ModifiedTag
 */

const SERIALIZED_MODIFIERS = Object.freeze({
  "+": "",
  "-": "-",
  "~": "",
});

/**
 * @param {ModifiedTag} modifierAndTag
 */
export const serializeTag = (modifierAndTag) => {
  return `${SERIALIZED_MODIFIERS[modifierAndTag.modifier]}${modifierAndTag.tag.name}`;
};
