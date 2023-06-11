import { createActiveTagFromTag } from '../../types/tags/Tag'
import { getTagSuggestions } from '../../api-client/ApiClient'
import { createActiveTag } from '../../types/tags/ActiveTag'
import { createDependentPersistentStore } from '../common/persistentStore'

/**
 * @typedef {import("../../types/definitions").Tag} Tag
 * @typedef {import("../../types/definitions").ActiveTag} ActiveTag
 */

function createActiveTagsStore() {
  /** @type {Array<ActiveTag>} */
  const initial = []

  const { subscribe, update, set } = createDependentPersistentStore('activeTags', initial)

  return {
    subscribe,
    set,

    /** @param {ActiveTag} tag */
    addOrReplace: (tag) =>
      update((tags) => {
        const i = tags.findIndex((active) => active.name === tag.name)
        if (i === -1) {
          tags.push(tag)
        } else {
          tags[i] = tag
        }
        return tags
      }),

    /** @param {string} name */
    addByName: async (name) => {
      let newTag = createActiveTag('+', name, 0, 'general')

      try {
        const suggestions = await getTagSuggestions(name)
        if (suggestions.length > 0) {
          newTag = createActiveTagFromTag(suggestions[0], '+')
        }
      } catch {
        // ignore
      }

      update((tags) => {
        tags.push(newTag)
        return tags
      })
    },

    /** @param {number} i */
    removeByIndex: (i) =>
      update((tags) => {
        tags.splice(i, 1)
        return tags
      }),
  }
}

export default createActiveTagsStore()
