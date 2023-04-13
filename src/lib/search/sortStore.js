import { writable } from 'svelte/store'
import { createPersistentStore } from '../common/persistentStore'

/**
 * @typedef {import('../../types/post-sort/sort').SortProperty} SortProperty
 * @typedef {{sortProperty: SortProperty, minScore: number}} SortAndFilter
 */

/** @type {SortAndFilter} */
const initial = { sortProperty: 'id', minScore: 0 }

const createSortStore = () => {
  const { subscribe, set } = createPersistentStore('sort', initial)

  return {
    subscribe,
    set,
  }
}

export default createSortStore()
