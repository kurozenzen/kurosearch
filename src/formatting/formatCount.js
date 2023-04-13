import { isValidCount } from '../types/tags/validation'

const formatter = Intl.NumberFormat('en', { notation: 'compact' })

/**
 * @param {number} value
 */
export const formatCount = (value) => {
  if (!isValidCount(value)) {
    throw new TypeError('Invalid value passed to formatCount')
  }
  
  return formatter.format(value)
}
