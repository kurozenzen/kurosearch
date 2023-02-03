import { writable } from 'svelte/store'

const defaultParser = JSON.parse;
const defaultSerializer = JSON.stringify;

/**
 * @template T
 * @param {string} key Key in localstorage
 * @param {T} initial Backup value if it isn't set
 * @param {(value: T) => string} serializer
 * @param {(value: string) => T} parser
 */
export const createPersistentStore = (key, initial, serializer = defaultSerializer, parser = defaultParser) => {
  /** @type {null | T} */
  const loaded = tryLoad(key, parser)
  const store = writable(loaded ?? initial)
  store.subscribe((value) => localStorage.setItem(key, serializer(value)))

  return store
}

/**
 * @template T
 * @param {string} key Key in localstorage
 * @param {T} initial Backup value if it isn't set
 * @param {(value: T) => string} serializer
 * @param {(value: string) => T} parser
 */
export const createDependentPersistentStore = (key, initial, serializer = defaultSerializer, parser = defaultParser) => {
  const enabled = localStorage.getItem('isPersistedLocally') === 'true'

  /** @type {null | T} */
  const loaded = enabled ? tryLoad(key, parser) : null
  const store = writable(loaded ?? initial)
  store.subscribe((value) => localStorage.setItem(key, serializer(value)))

  return store
}

/**
 * @template T
 * @returns {T | null}
 * @param {string} key
 * @param {(value: string) => T} parser
 */
const tryLoad = (key, parser) => {
  try {
    return parser(localStorage.getItem(key))
  } catch {
    return null
  }
}
