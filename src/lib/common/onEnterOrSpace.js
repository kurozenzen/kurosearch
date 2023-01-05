/**
 * @param {(event: KeyboardEvent) => void} handler
 */
export default function (handler) {
  return (event) => {
    if (event.code === 'Space' || event.code === 'Enter') {
      event.preventDefault()
      event.stopPropagation()
      handler(event)
    }
  }
}
