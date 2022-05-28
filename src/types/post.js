/**
 * @typedef {"e" | "q" | "s"} PostRating
 */
export const PostRating = null;

/**
 * @typedef {"active"} PostStatus
 */
export const PostStatus = null;

/**
 * @typedef {"image" | "video" | "gif"} PostType
 */
export const PostType = null;

/**
 * @typedef PostDTO
 * @property {number} change;
 * @property {string} comments_url;
 * @property {string} created_at;
 * @property {number} creator_id;
 * @property {string} file_url;
 * @property {boolean} has_children;
 * @property {boolean} has_comments;
 * @property {boolean} has_notes;
 * @property {number} height;
 * @property {number} id;
 * @property {string} md5;
 * @property {string} owner_url;
 * @property {number | null} parent_id;
 * @property {number} preview_height;
 * @property {string} preview_url;
 * @property {number} preview_width;
 * @property {PostRating} rating;
 * @property {number} sample_height;
 * @property {string} sample_url;
 * @property {number} sample_width;
 * @property {number} score;
 * @property {string} source;
 * @property {PostStatus} status;
 * @property {string[]} tags;
 * @property {PostType} type;
 * @property {number} width;
 */
export const PostDTO = null;

/**
 * @typedef Page
 * @property {number} count
 * @property {PostDTO[]} posts
 */
 export const Page = null;
