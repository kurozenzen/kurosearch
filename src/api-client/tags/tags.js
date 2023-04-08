import { Tag } from '../../tags/Tag'
import { fetchAbortPrevious } from '../fetchAbortPrevious'

/**
 * @typedef {import("../../tags/Tag").TagType} TagType
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
        return json.map(
          (t) =>
            new Tag(
              replaceHtmlEntities(t.value),
              Number(t.label.substring(t.label.lastIndexOf('(') + 1, t.label.length - 1)),
              'ambiguous'
            )
        )
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
export const replaceHtmlEntities = (raw) => {
  return raw
    .replaceAll('&#034;', '"')
    .replaceAll('&#038;', "&")
    .replaceAll('&#039;', "'")
}
