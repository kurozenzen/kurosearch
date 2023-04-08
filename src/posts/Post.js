/**
 * @typedef {import("../tags/Tag").Tag} Tag
 */

export class Post {
  /**
   * @param {string} preview_url
   * @param {string} sample_url
   * @param {string} file_url
   * @param {number} comment_count
   * @param {number} height
   * @param {number} id
   * @param {number} change
   * @param {number} parent_id
   * @param {string} rating
   * @param {number} sample_height
   * @param {number} sample_width
   * @param {number} score
   * @param {string} source
   * @param {string} status
   * @param {Tag[]} tags
   * @param {number} width
   * @param {string} type
   */
  constructor(
    preview_url,
    sample_url,
    file_url,
    comment_count,
    height,
    id,
    change,
    parent_id,
    rating,
    sample_height,
    sample_width,
    score,
    source,
    status,
    tags,
    width,
    type
  ) {
    this.preview_url = preview_url
    this.sample_url = sample_url
    this.file_url = file_url
    this.comment_count = comment_count
    this.height = height
    this.id = id
    this.change = change
    this.parent_id = parent_id
    this.rating = rating
    this.sample_height = sample_height
    this.sample_width = sample_width
    this.score = score
    this.source = source
    this.status = status
    this.tags = tags
    this.width = width
    this.type = type

    Object.freeze(this)
  }
}
