
/**
 * @param {number} value 
 */
export const formatCount = (value) => {
  if (value / 1e6 >= 1) {
    return `${(value / 1e6).toFixed(1)}M`
  }

  if (value >= 1e3) {
    return `${(value / 1e3).toFixed(1)}K`
  }

  return value.toString()
}