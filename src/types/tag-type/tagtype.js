/**
 * @typedef {"general" | "character" | "ambiguous" | "artist" | "copyright" | "rating" | "source" | "metadata" | "supertag" | "tag"} TagType
 */

/**
 * @type {readonly TagType[]}
 */
const VALID_TAG_TYPES = Object.freeze([
  'artist',
  'character',
  'copyright',
  'source',
  'metadata',
  'rating',
  'tag',
  'general',
  'ambiguous',
  'supertag',
])

/**
 * @param {string} value 
 */
export const isValidTagType = (value) => {
  // @ts-expect-error passing string as TagType
  return VALID_TAG_TYPES.includes(value)
}

/**
 * @param {string} value 
 */
export const getTagTypePriority = (value) => {
  // @ts-expect-error passing string as TagType
  const priority = VALID_TAG_TYPES.indexOf(value);
  return priority >= 0 ? priority : 99; // unrecognized means very high
}

const TAG_TYPES_WITH_ICONS = Object.freeze([
  'artist',
  'character',
  'copyright',
  'source',
  'metadata',
  'rating',
])

/**
 * @param {string} value 
 */
export const hasIcon = (value) => {
  return TAG_TYPES_WITH_ICONS.includes(value);
}