import { isValidCount } from '../tags/validation'
import { Post } from './Post'

const isValidPostArray = (posts) => {
  return Array.isArray(posts) && posts.every((p) => p instanceof Post)
}

export class Page {
  /**
   * @param {number} count
   * @param {Post[]} posts
   */
  constructor(count, posts) {
    if (!isValidCount(count)) {
      throw new TypeError('Invalid count passed to Page constructor')
    }

    if (!isValidPostArray(posts)) {
      throw new TypeError('Invalid posts passed to Page constructor')
    }

    this.count = count
    this.posts = Object.freeze(posts)

    Object.freeze(this)
  }
}
