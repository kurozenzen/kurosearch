import { writable } from 'svelte/store'

const { subscribe, set } = writable('dark')

export default {
  subscribe,
  set(theme) {
    set(theme)
    updateVisuals(theme)
  },
}

const updateVisuals = (theme) => {
  document.documentElement.classList.replace(inverseOfTheme(theme), theme)
}

const inverseOfTheme = (theme) => {
  return theme === 'dark' ? 'light' : 'dark'
}
