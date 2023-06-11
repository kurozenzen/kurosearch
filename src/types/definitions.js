/**
 * @typedef {"Loli" | "Animal-Related" | "Non-Consentual"} BlockingGroup
 */

/**
 * @typedef {"+" | "-" | "~"} Modifier
 */

/**
 * @typedef {"general" | "character" | "ambiguous" | "artist" | "copyright" | "rating" | "source" | "metadata" | "supertag" | "tag"} TagType
 */

/**
 * @typedef {"id" | "score" | "updated"} SortProperty
 * @typedef {"asc" | "desc"} SortDirection
 * @typedef {">=" | "<="} ScoreComparator
 */

/**
 * @typedef ApiTag
 * @property {string} tag
 * @property {number} count
 * @property {TagType} type
 */

/**
 * @typedef Tag
 * @property {string} name
 * @property {number} count
 * @property {TagType} type
 */

/**
 * @typedef ActiveTag
 * @property {Modifier} modifier
 * @property {string} name
 * @property {number} count
 * @property {TagType} type
 */

/**
 * @typedef SearchableTag
 * @property {Modifier} modifier
 * @property {string} name
 */

/**
 * @typedef Supertag
 * @property {string} name
 * @property {string} description
 * @property {SearchableTag[]} tags
 */

/**
 * @typedef Suggestion
 * @property {string} value
 * @property {string} label
 */

export default {}
