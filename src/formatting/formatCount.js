import { isValidCount } from '../types/tags/validation'

const formatter = Intl.NumberFormat('en', { notation: 'compact' })

/**
 * @param {number} value
 */
export const formatCount = (value) => {
  if (!isValidCount(value)) {
    return "-"
  }

  return formatter.format(value)
}
