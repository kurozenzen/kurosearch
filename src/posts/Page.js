/**
 * @typedef {import("./Post").Post} Post
 */

export class Page {
  /**
   * @param {number} count
   * @param {Post[]} posts
   */
  constructor(count, posts) {
    this.count = count;
    this.posts = posts;

    Object.freeze(this);
  }
}
