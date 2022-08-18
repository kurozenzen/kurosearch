export class Post {
  /**
   * @param {string} preview_url
   * @param {string} sample_url
   * @param {string} file_url
   * @param {string} created_at
   * @param {boolean} has_children
   * @param {string} md5
   * @param {number} height
   * @param {number} id
   * @param {number} change
   * @param {number} creator_id
   * @param {boolean} has_notes
   * @param {boolean} has_comments
   * @param {number} parent_id
   * @param {number} preview_width
   * @param {number} preview_height
   * @param {string} rating
   * @param {number} sample_height
   * @param {number} sample_width
   * @param {number} score
   * @param {string} source
   * @param {string} status
   * @param {string} tags
   * @param {number} width
   * @param {string} comments_url
   * @param {string} owner_url
   * @param {string} type
   */
  constructor(
    preview_url,
    sample_url,
    file_url,
    created_at,
    has_children,
    md5,
    height,
    id,
    change,
    creator_id,
    has_notes,
    has_comments,
    parent_id,
    preview_width,
    preview_height,
    rating,
    sample_height,
    sample_width,
    score,
    source,
    status,
    tags,
    width,
    comments_url,
    owner_url,
    type
  ) {
    this.preview_url = preview_url;
    this.sample_url = sample_url;
    this.file_url = file_url;
    this.created_at = created_at;
    this.has_children = has_children;
    this.md5 = md5;
    this.height = height;
    this.id = id;
    this.change = change;
    this.creator_id = creator_id;
    this.has_notes = has_notes;
    this.has_comments = has_comments;
    this.parent_id = parent_id;
    this.preview_width = preview_width;
    this.preview_height = preview_height;
    this.rating = rating;
    this.sample_height = sample_height;
    this.sample_width = sample_width;
    this.score = score;
    this.source = source;
    this.status = status;
    this.tags = tags;
    this.width = width;
    this.comments_url = comments_url;
    this.owner_url = owner_url;
    this.type = type;

    Object.freeze(this);
  }
}
