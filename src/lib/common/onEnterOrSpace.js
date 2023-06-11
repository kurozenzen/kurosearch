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
export const isSpace = (event) => event.key === ' '

/** @param {KeyboardEvent} event */
export const isEnter = (event) => event.key === 'Enter' // for mobile enter button

/** @param {KeyboardEvent} event */
export const triggerClickOnEnter = (event) => {
  if (isEnter(event)) {
    event.target.click()
  }
}
