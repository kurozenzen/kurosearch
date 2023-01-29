import { writable } from 'svelte/store'

/**
 * @template T
 * @param {string} key Key in localstorage
 * @param {T} initial Backup value if it isn't set
 */
export const createPersistentStore = (key, initial) => {
  /** @type {null | T} */
  const loaded = tryLoad(key)
  const store = writable(loaded ?? initial)
  store.subscribe((value) => localStorage.setItem(key, JSON.stringify(value)))

  return store
}

/**
 * @template T
 * @returns {T | null}
 * @param {string} key
 */
const tryLoad = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch {
    return null
  }
}
