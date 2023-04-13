import { Comment } from '../../types/comment/Comment'

const baseUrl = 'https://api.rule34.xxx/index.php?page=dapi&s=comment&q=index&json=1'

/**
 * @param {number | undefined} postId undefined means comments from all posts
 * @returns {Promise<Comment[]>}
 */
export const getComments = async (postId = undefined) => {
  if(typeof postId !== "number" && postId !== undefined) {
    throw new TypeError("Invalid postId")
  }

  const url = postId === undefined ? baseUrl : `${baseUrl}&post_id=${postId}`
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Failed to get tag suggestions')
  }

  const text = await response.text()
  const parser = new DOMParser()
  const xml = parser.parseFromString(text, 'text/xml')

  /** @type {Comment[]} */
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
  const creator = comment.getNamedItem('creator');
  const createdAt = comment.getNamedItem('created_at')
  const body = comment.getNamedItem('body')

  if(creator == null || createdAt == null || body == null) {
    throw new Error(`Failed to parse comment, attribute was null. ${creator}, ${createdAt}, ${body}`);
  }

  return new Comment(
    creator.value,
    createdAt.value,
    body.value
  )
}

