import { getCurrentBackendBaseUrl } from '../../lib/preferences/currentBackend'
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
 * @param {boolean} fuzzy
 * @return {Promise<Tag[]>}
 */
export const getTagSuggestions = async (term, fuzzy) => {
  const name = fuzzy ? `*${term}*` : term
  const res = await fetchAbortPrevious(
    `${getCurrentBackendBaseUrl()}/tags?limit=20&sort=count&name=${name.replaceAll(' ', '_')}`,
    getTagSuggestionsAbortController
  )

  if (res.ok) {
    const json = await res.json()
    if (Array.isArray(json)) {
      if (json.length == 0) {
        throw new Error('No tags found')
      } else {
        return json.map((t) => new Tag(t.name, t.count, selectType(t.types)))
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

/**
 * @param {TagType[]} types
 * @returns {TagType}
 */
const selectType = (types) => {
  for (const type of types) {
    if (type !== 'ambiguous' && type !== 'general') {
      return type
    }
  }

  return 'general'
}
