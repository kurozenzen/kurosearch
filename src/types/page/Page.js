import { Post } from '../post/Post'

/**
 * @param {unknown} posts 
 */
const throwIfPostsInvalid = (posts) => {
  if (!Array.isArray(posts) || posts.some((p) => !(p instanceof Post))) {
    throw new TypeError('Invalid posts passed to Page constructor')
  }
}

export class Page {
  /**
   * @param {Post[]} posts
   */
  constructor(posts) {
    throwIfPostsInvalid(posts)

    this.posts = Object.freeze(posts);
    
    Object.freeze(this)
  }
}
