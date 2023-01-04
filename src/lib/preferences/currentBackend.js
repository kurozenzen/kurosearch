let currentBackend = 'adaptable'

const BACKEND_URLS = Object.freeze({
  adaptable: 'https://rule34-json-api.adaptable.app/v2',
})

export const BACKENED_NAMES = Object.freeze({
  adaptable: 'Adaptable',
})

export const getCurrentBackendBaseUrl = () => BACKEND_URLS[currentBackend]
export const getCurrentBackend = () => currentBackend
export const setCurrentBackend = (newBackend) => {
  if (!(newBackend in BACKEND_URLS)) {
    throw new TypeError(`Attempted to set unexpected backend: ${newBackend}`)
  }

  currentBackend = newBackend
}
