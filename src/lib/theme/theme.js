import { writable } from 'svelte/store'
import userdata from '../account/userdata'

/** @typedef {"dark" | "light"} Theme */

/** @type {import('svelte/store').Writable<Theme>} */
const { subscribe, set } = writable('dark')

export default {
  subscribe,
  /** @param {Theme} theme */
  set(theme) {
    set(theme)
    updateVisuals(theme)
    userdata.setTheme(theme)
  },
}

/** @param {Theme} theme */
const updateVisuals = (theme) => {
  document.documentElement.classList.replace(inverseOfTheme(theme), theme)
}

/**
 * @param {Theme} theme
 * @returns {Theme}
 */
const inverseOfTheme = (theme) => {
  return theme === 'dark' ? 'light' : 'dark'
}
