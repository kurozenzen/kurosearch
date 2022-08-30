/** @param {string} tagname */
export function formatTagname(tagname) {
  return tagname
    .replace(/_/g, ' ')
    .replace(/source:/g, '')
    .replace(/rating:/g, '')
}
