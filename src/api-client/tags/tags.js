import { createTag } from '../../types/tags/Tag'
import { fetchAbortPrevious } from '../fetchAbortPrevious'

/**
 * @typedef {import("../../types/definitions").TagType} TagType
 * @typedef {import("../../types/definitions").Tag} Tag
 * @typedef {import("../../types/definitions").Suggestion} Suggestion
 */

/**
 * @type {AbortController | null}
 */
let getTagSuggestionsAbortController = null

/**
 * @param {string} term
 * @return {Promise<Tag[]>}
 */
export const getTagSuggestions = async (term) => {
  const baseUrl = 'https://api.rule34.xxx/autocomplete.php?q='
  const name = term.replaceAll(' ', '_')
  const res = await fetchAbortPrevious(`${baseUrl}${name}`, getTagSuggestionsAbortController)

  if (res.ok) {
    const json = await res.json()
    if (Array.isArray(json)) {
      if (json.length === 0) {
        throw new Error('No tags found')
      } else {
        return json.map(createTagFromSuggestion)
      }
    } else if (json.message) {
      throw new Error(json.message)
    } else {
      throw new Error('Invalid tag suggestions received')
    }
  } else {
    throw new Error('Failed to get tag suggestions')
  }
}

/** @param {string} raw */
export const replaceHtmlEntities = (raw) =>
  raw.replaceAll('&#034;', '"').replaceAll('&#038;', '&').replaceAll('&#039;', "'").replaceAll('&eacute;', 'é')

/**
 *
 * @param {Suggestion} suggestion
 * @returns {Tag}
 */
const createTagFromSuggestion = (suggestion) =>
  createTag(replaceHtmlEntities(suggestion.value), extractCount(suggestion.label), 'ambiguous')

/**
 * @param {string} label
 * @returns {Number}
 */
const extractCount = (label) => {
  return Number(label.substring(label.lastIndexOf('(') + 1, label.length - 1))
}
