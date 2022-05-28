
/**
 * @param {number} value 
 */
export const formatCount = (value) => {
  if (value / 1e6 >= 1) {
    return `${Math.trunc(value / 1e6)}M`
  }

  if (value >= 1e3) {
    return `${Math.trunc(value / 1e3)}K`
  }

  return value.toString()
}