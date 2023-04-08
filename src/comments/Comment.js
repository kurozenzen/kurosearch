export class Comment {
  /**
   * @param {string} author 
   * @param {string} createdAt 
   * @param {string} content 
   */
  constructor(author, createdAt, content) {
    this.author = author
    this.createdAt = createdAt
    this.content = content

    Object.freeze(this)
  }
}
