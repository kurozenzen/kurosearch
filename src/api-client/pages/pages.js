import { isValidCount } from '../../types/tags/validation'
import { Post } from '../../types/post/Post'
import { isValidSortProperty } from '../../types/post-sort/sort'
import { SearchableTag } from '../../types/tags/SearchableTag'
import { fetchAbortPrevious } from '../fetchAbortPrevious'
import { Tag } from '../../types/tags/Tag'
import { getTagTypePriority } from '../../types/tag-type/tagtype'
import { replaceHtmlEntities } from '../tags/tags'

/**
 * @typedef {import('../../types/post-sort/sort').SortProperty} SortProperty
 * @typedef {import('../../types/tag-type/tagtype').TagType} TagType
 * @typedef {{tag: string, count: number, type: TagType}} ApiTag
 */

export const PAGE_SIZE = 20

/**
 * @type {AbortController | null}
 */
let getPageAbortController = null

const throwOnUnexpectedStatus = (response) => {
  if (!response.ok) {
    throw new Error(`getPage failed with http status ${response.status}`)
  }
}

/**
 * @param {number} pageNumber
 * @param {string} tags
 */
export const getPage = async (pageNumber, tags) => {
  const response = await fetchAbortPrevious(getPostsUrl(pageNumber, tags), getPageAbortController)

  throwOnUnexpectedStatus(response)

  const data = await response.json()
  const posts = data.map(parsePost)

  throwOnInvalidResponse(posts)

  return posts
}

/**
 * @param {string} tags
 */
export const getCount = async (tags) => {
  const response = await fetchAbortPrevious(getCountUrl(tags), getPageAbortController)

  throwOnUnexpectedStatus(response)

  const text = await response.text()
  const parser = new DOMParser()
  const xml = parser.parseFromString(text, 'text/xml')

  const count = Number(xml.getElementsByTagName('posts')[0].getAttribute('count'))

  throwOnInvalidCount(count)

  return count
}

const parsePost = (post) => {
  const height = post.height
  const score = post.score
  const preview_url = post.preview_url
  const file_url = post.file_url
  const parent_id = post.parent_id
  const sample_url = post.sample_url
  const sample_width = post.sample_width
  const sample_height = post.sample_height
  const rating = post.rating
  const tagInfo = post.tag_info
  const id = post.id
  const width = post.width
  const change = post.change
  const comment_count = post.comment_count
  const status = post.status
  const source = post.source

  return new Post(
    preview_url,
    sample_url,
    file_url,
    Number(comment_count),
    Number(height),
    Number(id),
    Number(change) * 1000,
    parent_id ? Number(parent_id) : null,
    rating,
    Number(sample_height),
    Number(sample_width),
    Number(score),
    source,
    status,
    parseTagInfo(tagInfo),
    Number(width),
    file_url.endsWith('.webm') || file_url.endsWith('.mp4') ? 'video' : file_url.includes('.gif') ? 'gif' : 'image'
  )
}

/**
 * @param {Array<ApiTag>} tagInfo
 */
const parseTagInfo = (tagInfo) => {
  return tagInfo
    .map((t) => new Tag(replaceHtmlEntities(t.tag), t.count, t.type))
    .sort((a, b) => getTagTypePriority(a.type) - getTagTypePriority(b.type))
}

const throwOnInvalidParameter = (pageNumber, tags, sortProperty, minScore) => {
  if (!isValidPageNumber(pageNumber)) {
    throw new TypeError('Invalid pageNumber passed to getPage')
  }

  if (!isValidSortProperty(sortProperty)) {
    throw new TypeError('Invalid sort property passed to getPage')
  }

  if (!isValidMinScore(minScore)) {
    throw new TypeError('Invalid minimum score passed to getPage')
  }
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

const partitionTagsByModifier = (tags) => {
  const partitions = {
    '+': [],
    '-': [],
    '~': [],
  }

  tags.forEach((t) => partitions[t.modifier].push(t))

  return partitions
}

/**
 * @param {SearchableTag[]} tags
 * @param {SortProperty} sortProperty
 * @param {number} minScore
 */
export const serializeSearchParameters = (tags, sortProperty, minScore) => {
  const tagsByModifier = partitionTagsByModifier(tags)
  const tagsString = [
    ...serializeTags([...tagsByModifier['+'], ...tagsByModifier['-']]),
    `score:>=${minScore}`,
    `sort:${sortProperty}:desc`,
  ].join('+')

  return tagsByModifier['~'].length === 0
    ? tagsString
    : `${tagsString}+( ${serializeTags(tagsByModifier['~']).join(' ~ ')} )`
}

/**
 * @param {SearchableTag[]} tags
 */
const serializeTags = (tags) => tags.map((t) => t.serialize())

/**
 * @param {number} pageNumber
 * @param {string} serializedTags
 */
export const getPostsUrl = (pageNumber, serializedTags) => {
  const baseApiPostsUrl = `https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&fields=tag_info&json=1`
  const url = `${baseApiPostsUrl}&limit=${PAGE_SIZE}&pid=${pageNumber}`
  return serializedTags === '' ? url : `${url}&tags=${serializedTags}`
}

/**
 * @param {string} serializedTags
 */
export const getCountUrl = (serializedTags) => {
  const url = `https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&limit=0`
  return serializedTags === '' ? url : `${url}&tags=${serializedTags}`
}

const throwOnInvalidResponse = (json) => {
  if (!Array.isArray(json)) {
    throw new Error('Unexpected response received in getPage')
  }
}

const throwOnInvalidCount = (count) => {
  if (!isValidCount(count)) {
    throw new Error('Unexpected response received in getPage')
  }
}
