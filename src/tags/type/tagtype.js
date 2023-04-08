/**
 * @typedef {"general" | "character" | "ambiguous" | "artist" | "copyright" | "rating" | "source" | "metadata" | "supertag" | "tag"} TagType
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
 * @returns 
 */
export const isValidTagType = (value) => {
  return VALID_TAG_TYPES.includes(value)
}

/**
 * @param {string} value 
 */
export const getTagTypePriority = (value) => {
  const priority = VALID_TAG_TYPES.indexOf(value);
  return priority >= 0 ? priority : 99;
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