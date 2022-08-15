/**
 * @typedef {"general" | "character" | "ambiguous" | "artist" | "copyright" | "rating" | "source" | "metadata" | "supertag"} TagType
 */

const VALID_TAG_TYPES = Object.freeze([
  "general",
  "character",
  "ambiguous",
  "artist",
  "copyright",
  "rating",
  "source",
  "metadata",
  "supertag",
]);
export const isValidTagType = (value) => {
  return VALID_TAG_TYPES.includes(value);
};
