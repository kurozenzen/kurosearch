/**
 * @param {number} seconds
 * @return {string}
 */
export const formatVideoTime = (seconds) => {
  if (typeof seconds !== 'number') {
    throw new TypeError(`Attempted to call formatVideoTime with invalid value: ${seconds}`)
  }

  const floored = Math.floor(seconds)
  const s = floored % 60
  const m = Math.floor(floored / 60)

  return `${ensureDoubleDigits(m)}:${ensureDoubleDigits(s)}`
}

/**
 * @param {Number} number
 * @return {string}
 */
const ensureDoubleDigits = (number) => {
  const stringified = String(number)
  const neededZeros = Math.max(0, 2 - stringified.length)
  const zeros = '0'.repeat(neededZeros)

  return `${zeros}${stringified}`
}
