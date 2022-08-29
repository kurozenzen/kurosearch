import { writable } from 'svelte/store'

/**
 * @typedef {import('../../posts/sort/sort').SortProperty} SortProperty
 * @typedef {{sortProperty: SortProperty, minScore: number}} SortAndFilter
 */

/** @type {SortAndFilter} */
const initial = { sortProperty: 'id', minScore: 0 }

const createSortStore = () => {
  const { subscribe, set } = writable(initial)

  return {
    subscribe,
    set,
  }
}

export default createSortStore()
