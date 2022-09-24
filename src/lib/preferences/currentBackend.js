let currentBackend = 'heroku'

const BACKEND_URLS = Object.freeze({
  heroku: 'https://r34-json.herokuapp.com/v2',
  adaptable: 'https://rule34-json-api.adaptable.app/v2',
  render: 'https://json-api.onrender.com/v2',
  railway: 'https://api-service-production-122b.up.railway.app/v2',
})

export const BACKENED_NAMES = Object.freeze({
  heroku: 'Heroku',
  adaptable: 'Adaptable',
  render: 'Render',
  railway: 'Railway',
})

export const getCurrentBackendBaseUrl = () => BACKEND_URLS[currentBackend]
export const getCurrentBackend = () => currentBackend
export const setCurrentBackend = (newBackend) => {
  if (!(newBackend in BACKEND_URLS)) {
    throw new TypeError(`Attempted to set unexpected backend: ${newBackend}`)
  }

  currentBackend = newBackend
}
