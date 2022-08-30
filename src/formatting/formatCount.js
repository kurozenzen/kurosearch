import { isValidCount } from '../tags/validation'

/**
 * @param {number} value
 */
export const formatCount = (value) => {
  if (!isValidCount(value)) {
    throw new TypeError('Invalid value passed to formatCount')
  }

  if (value >= 1e6) {
    return `${Math.trunc(value / 1e5) / 10}M`
  }

  if (value >= 1e3) {
    return `${Math.trunc(value / 1e2) / 10}K`
  }

  return value.toString()
}
