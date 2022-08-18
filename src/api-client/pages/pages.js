import { Page } from '../../posts/Page'
import { Post } from '../../posts/Post'
import { isValidSortProperty } from '../../posts/sort/sort'
import { SearchableTag } from '../../tags/SearchableTag'
import { fetchAbortPrevious } from '../fetchAbortPrevious'

/**
 * @typedef {import("../../posts/sort/sort").SortProperty} SortProperty
 */

export const PAGE_SIZE = 20
const BASE_URL = 'https://r34-json.herokuapp.com/v2'

/**
 * @type {AbortController | null}
 */
let getPageAbortController = null

export const getPage = async (pageNumber, tags, sortProperty, minScore) => {
  if (!isValidPageNumber(pageNumber)) {
    throw new TypeError('Invalid pageNumber passed to getPage')
  }

  if (!isValidTagsArray(tags)) {
    throw new TypeError('Invalid array of tags passed to getPage')
  }

  if (!isValidSortProperty(sortProperty)) {
    throw new TypeError('Invalid sort property passed to getPage')
  }

  if (!isValidMinScore(minScore)) {
    throw new TypeError('Invalid minimum score passed to getPage')
  }

  const response = await fetchAbortPrevious(
    getPostsUrl(pageNumber, serializeTags(tags, sortProperty, minScore)),
    getPageAbortController
  )

  if (!response.ok) {
    throw new Error(`getPage failed with http status ${response.status}`)
  }

  const json = await response.json()

  if (!Array.isArray(json.posts)) {
    throw new Error(json)
  }

  return new Page(
    json.count,
    json.posts.map(
      (p) =>
        new Post(
          p.preview_url,
          p.sample_url,
          p.file_url,
          p.created_at,
          p.has_children,
          p.md5,
          p.height,
          p.id,
          p.change,
          p.creator_id,
          p.has_notes,
          p.has_comments,
          p.parent_id,
          p.preview_width,
          p.preview_height,
          p.rating,
          p.sample_height,
          p.sample_width,
          p.score,
          p.source,
          p.status,
          p.tags,
          p.width,
          p.comments_url,
          p.owner_url,
          p.type
        )
    )
  )
}

export const isValidPageNumber = (value) => {
  return typeof value === 'number' && value >= 0
}

export const isValidTagsArray = (value) => {
  return Array.isArray(value) && (value.length === 0 || value.every((t) => t instanceof SearchableTag))
}

export const isValidMinScore = (value) => {
  return typeof value === 'number' && value >= 0
}
/**
 * @param {SearchableTag[]} tags
 * @param {SortProperty} sortProperty
 * @param {number} minScore
 */
export const serializeTags = (tags, sortProperty, minScore) => {
  const groupedTags = tags.reduce(
    (result, t) => {
      if (t.modifier === '~') {
        result.optional.push(t)
      } else {
        result.other.push(t)
      }
      return result
    },
    { optional: [], other: [] }
  )

  const tagsString = [
    ...groupedTags.other.map((t) => t.serialize()),
    `sort:${sortProperty}:desc`,
    `score:>=${minScore}`,
  ].join('+')

  return groupedTags.optional.length == 0
    ? tagsString
    : `${tagsString}+( ${groupedTags.optional.map((t) => t.serialize()).join(' ~ ')} )`
}

/**
 * @param {number} pageNumber
 * @param {string} serializedTags
 */
export const getPostsUrl = (pageNumber, serializedTags) => {
  const url = `${BASE_URL}/posts?limit=${PAGE_SIZE}&pid=${pageNumber}`

  return serializedTags === '' ? url : `${url}&tags=${serializedTags}`
}
