import { getTagSuggestions } from '../../api-client/ApiClient'
import { writable } from 'svelte/store'
import { ActiveTag } from '../../tags/ActiveTag'
import { createPersistentStore } from '../common/persistentStore'

/** @typedef {import("../../tags/Tag").Tag} Tag */

function createActiveTagsStore() {
  /** @type {Array<ActiveTag>} */
  const initial = []
  const { subscribe, update, set } = createPersistentStore('activeTags', initial)

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
      update((tags) => {
        tags.push(new ActiveTag('+', name, 0, 'general'))
        return tags
      })

      try {
        const suggestions = await getTagSuggestions(name, true, 1)
        if (Array.isArray(suggestions) && suggestions.length === 1) {
          const suggestion = suggestions.at(0)

          update((tags) => {
            const index = tags.findIndex((t) => t.name === suggestion.name)
            tags[index] = new ActiveTag('+', suggestion.name, suggestion.count, suggestion.type)
            return tags
          })
        }
      } catch {
        console.warn('Failed to load type and count for tag.', name)
      }
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
