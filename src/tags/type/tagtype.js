/**
 * @typedef {"general" | "character" | "ambiguous" | "artist" | "copyright" | "rating" | "source" | "metadata" | "supertag"} TagType
 */

const VALID_TAG_TYPES = Object.freeze([
  'ambiguous',
  'artist',
  'character',
  'copyright',
  'general',
  'metadata',
  'rating',
  'source',
  'supertag',
])
export const isValidTagType = (value) => {
  return VALID_TAG_TYPES.includes(value)
}
