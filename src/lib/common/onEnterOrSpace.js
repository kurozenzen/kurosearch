/**
 * @param {(event: KeyboardEvent) => void} handler
 * @returns {(event: KeyboardEvent) => void}
 */
export default (handler) => {
  return (event) => {
    if (isEnter(event) || isSpace(event)) {
      event.preventDefault()
      event.stopPropagation()
      handler(event)
    }
  }
}

/** @param {KeyboardEvent} event */
export const isSpace = (event) => event.code === 'Space'

/** @param {KeyboardEvent} event */
export const isEnter = (event) => event.code === 'Enter' || event.key === 'Enter' // for mobile enter button
