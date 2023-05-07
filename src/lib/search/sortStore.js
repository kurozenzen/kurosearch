import { writable } from 'svelte/store'
import { createPersistentStore } from '../common/persistentStore'

/**
 * @typedef {import('../../types/post-sort/sort').SortProperty} SortProperty
 * @typedef {import('../../types/post-sort/sort').SortDirection} SortDirection
 * @typedef {import('../../types/post-sort/sort').ScoreComparator} ScoreComparator
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
  const { subscribe, set } = createPersistentStore('sort', initial)

  return {
    subscribe,
    set,
  }
}

export default createSortStore()
