import { writable } from 'svelte/store'
import { createPersistentStore } from '../common/persistentStore'

/**
 * @typedef {import('../../types/post-sort/sort').SortProperty} SortProperty
 * @typedef {import('../../types/post-sort/sort').SortDirection} SortDirection
 * @typedef {{sortProperty: SortProperty, minScore: number, sortDirection: SortDirection}} SortAndFilter
 */

/** @type {SortAndFilter} */
const initial = { sortProperty: 'id', minScore: 0, sortDirection: "desc" }

const createSortStore = () => {
  const { subscribe, set } = createPersistentStore('sort', initial)

  return {
    subscribe,
    set,
  }
}

export default createSortStore()
