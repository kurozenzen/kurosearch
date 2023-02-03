import { Comment } from '../../comments/Comment'

/**
 * @param {number} postId
 * @returns {Promise<Comment[]>}
 */
export const getComments = async (postId) => {
  const baseUrl = 'https://api.rule34.xxx/index.php?page=dapi&s=comment&q=index&json=1&post_id='
  const response = await fetch(`${baseUrl}${postId}`)

  if (!response.ok) {
    throw new Error('Failed to get tag suggestions')
  }

  const text = await response.text()
  const parser = new DOMParser()
  const xml = parser.parseFromString(text, 'text/xml')

  const comments = []
  for (const comment of xml.getElementsByTagName('comment')) {
    comments.push(parseComment(comment.attributes))
  }

  return comments
}

/**
 *
 * @param {NamedNodeMap} comment
 * @returns {Comment}
 */
const parseComment = (comment) => {
  return new Comment(
    comment.getNamedItem('creator').value,
    comment.getNamedItem('created_at').value,
    comment.getNamedItem('body').value
  )
}
