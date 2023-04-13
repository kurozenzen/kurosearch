export class Comment {
  /**
   * @param {string} author
   * @param {string} createdAt
   * @param {string} content
   */
  constructor(author, createdAt, content) {
    throwIfAuthorInvalid(author)
    throwIfCreatedAtInvalid(createdAt)
    throwIfContentInvalid(content)

    this.author = author
    this.createdAt = createdAt
    this.content = content

    Object.freeze(this)
  }
}

/**
 * @param {unknown} author 
 */
const throwIfAuthorInvalid = (author) => {
  if (typeof author !== 'string') {
    throw new TypeError('Invalid author in comment')
  }
}

/**
 * @param {unknown} content 
 */
const throwIfContentInvalid = (content) => {
  if (typeof content !== 'string') {
    throw new TypeError('Invalid content in comment')
  }
}

/**
 * @param {unknown} createdAt 
 */
const throwIfCreatedAtInvalid = (createdAt) => {
  if (typeof createdAt !== 'string') {
    throw new TypeError('Invalid creation date in comment')
  }
}

