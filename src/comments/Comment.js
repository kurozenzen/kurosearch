export class Comment {
  constructor(author, createdAt, content) {
    this.author = author
    this.createdAt = createdAt
    this.content = content

    Object.freeze(this)
  }
}
