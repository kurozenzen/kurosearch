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

// $("table[class='highlightable'] tr").each((i, elem) => {
//   if (elem.childNodes.length === 2) {
//     const text = $(elem.childNodes[1]).text();
//     tooManyResults = Number(text.split(" results found")[0]);
//   } else if (elem.childNodes.length === 3) {
//     data.push({
//       count: Number($(elem.childNodes[0]).text()),
//       name: $(elem.childNodes[1]).text(),
//       types: $(elem.childNodes[2])
//         .text()
//         .replace(" (edit)", "")
//         .split(", ") as TagType[],
//     });
//   }
// });

// if (limit && limit < data.length) data.length = limit;

// if (tooManyResults > 0) {
//   res.json({
//     message: "Refine your search",
//     results: tooManyResults,
//   });
// } else {
//   res.json(data);
// }

/**
 * @param {string} term
 * @param {boolean} exact
 * @return {Promise<Tag[]>}
 */
export const getTagSuggestions = async (term, exact, limit = 20) => {
  const baseUrl = 'https://api.rule34.xxx/autocomplete.php?q='
  const name = term.replaceAll(' ', '_')
  const res = await fetchAbortPrevious(`${baseUrl}${name}`, getTagSuggestionsAbortController)

  if (res.ok) {
    const json = await res.json()
    if (Array.isArray(json)) {
      if (json.length == 0) {
        throw new Error('No tags found')
      } else {
        return json.map(
          (t) =>
            new Tag(t.value, Number(t.label.substring(t.label.lastIndexOf('(') + 1, t.label.length - 1)), 'ambiguous')
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
