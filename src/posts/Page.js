import { isValidCount } from '../tags/validation'
import { Post } from './Post'

const isValidPostArray = (posts) => {
  return Array.isArray(posts) && posts.every((p) => p instanceof Post)
}

export class Page {
  /**
   * @param {Post[]} posts
   */
  constructor(posts) {
    if (!isValidPostArray(posts)) {
      throw new TypeError('Invalid posts passed to Page constructor')
    }

    this.posts = Object.freeze(posts)

    Object.freeze(this)
  }
}
