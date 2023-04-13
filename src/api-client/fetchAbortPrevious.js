/**
 * @param {string} url
 * @param {AbortController | null} abortController
 */
export const fetchAbortPrevious = (url, abortController) => {
  if (!isValidUrl(url)) {
    throw new TypeError('Invalid URL passed to fetchAbortPrevious')
  }

  if (!isValidAbortController(abortController)) {
    throw new TypeError('Invalid AbortController passed to fetchAbortPrevious')
  }

  if (abortController) {
    abortController.abort()
  }

  abortController = new AbortController()

  return fetch(url, {
    signal: abortController.signal,
  })
}

/**
 * @param {string} value 
 */
export const isValidUrl = (value) => {
  try {
    new URL(value)
    return true
  } catch {
    return false
  }
}

/**
 * @param {unknown} value 
 */
const isValidAbortController = (value) => {
  return value === null || value instanceof AbortController
}
