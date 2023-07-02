import { writable } from 'svelte/store'
import { createPersistentStore } from '../common/persistentStore'

/**
 * @typedef {import('../../types/definitions').SortProperty} SortProperty
 * @typedef {import('../../types/definitions').SortDirection} SortDirection
 * @typedef {import('../../types/definitions').ScoreComparator} ScoreComparator
 *
 * @typedef SortAndFilter
 * @property {SortProperty} sortProperty
 * @property {SortDirection} sortDirection
 * @property {number} scoreValue
 * @property {ScoreComparator} scoreComparator
 */

/** @type {SortAndFilter} */
const initial = { sortProperty: 'id', scoreValue: 0, scoreComparator: '>=', sortDirection: 'desc' }

const createSortStore = () => {
  const { subscribe, set } = createPersistentStore('sort', { ...initial })

  return {
    subscribe,
    set,
    reset() {
      set({ ...initial })
    },
  }
}

export default createSortStore()
