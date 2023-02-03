import { Page } from '../../posts/Page'
import { Post } from '../../posts/Post'
import { isValidSortProperty } from '../../posts/sort/sort'
import { SearchableTag } from '../../tags/SearchableTag'
import { fetchAbortPrevious } from '../fetchAbortPrevious'

/**
 * @typedef {import('../../posts/sort/sort').SortProperty} SortProperty
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
 * @param {SearchableTag[]} tags
 * @param {SortProperty} sortProperty
 * @param {number} minScore
 */
export const getPage = async (pageNumber, tags, sortProperty, minScore) => {
  throwOnInvalidParameter(pageNumber, tags, sortProperty, minScore)

  const serializedTags = serializeSearchParameters(tags, sortProperty, minScore)
  const response = await fetchAbortPrevious(getPostsUrl(pageNumber, serializedTags), getPageAbortController)
  throwOnUnexpectedStatus(response)

  const text = await response.text()
  const parser = new DOMParser()
  const xml = parser.parseFromString(text, 'text/xml')

  const count = Number(xml.getElementsByTagName('posts')[0].getAttribute('count'))
  const posts = []

  for (const post of xml.getElementsByTagName('post')) {
    posts.push(parsePost(post.attributes))
  }

  return new Page(count, posts)
}

const parsePost = (post) => {
  const height = post.getNamedItem('height').value
  const score = post.getNamedItem('score').value
  const file_url = post.getNamedItem('file_url').value
  const parent_id = post.getNamedItem('parent_id').value
  const sample_url = post.getNamedItem('sample_url').value
  const sample_width = post.getNamedItem('sample_width').value
  const sample_height = post.getNamedItem('sample_height').value
  const preview_url = post.getNamedItem('preview_url').value
  const rating = post.getNamedItem('rating').value
  const tags = post.getNamedItem('tags').value
  const id = post.getNamedItem('id').value
  const width = post.getNamedItem('width').value
  const change = post.getNamedItem('change').value
  const md5 = post.getNamedItem('md5').value
  const creator_id = post.getNamedItem('creator_id').value
  const has_children = post.getNamedItem('has_children').value
  const created_at = post.getNamedItem('created_at').value
  const status = post.getNamedItem('status').value
  const source = post.getNamedItem('source').value
  const has_notes = post.getNamedItem('has_notes').value
  const has_comments = post.getNamedItem('has_comments').value
  const preview_width = post.getNamedItem('preview_width').value
  const preview_height = post.getNamedItem('preview_height').value

  return new Post(
    preview_url,
    sample_url,
    file_url,
    created_at,
    has_children === 'true',
    md5,
    Number(height),
    Number(id),
    Number(change),
    Number(creator_id),
    has_notes === 'true',
    has_comments === 'true',
    parent_id ? Number(parent_id) : null,
    Number(preview_width),
    Number(preview_height),
    rating,
    Number(sample_height),
    Number(sample_width),
    Number(score),
    source,
    status,
    tags.split(' ').filter((tag, index, array) => tag !== '' && array.indexOf(tag) == index),
    Number(width),
    '',
    '',
    file_url.endsWith('.webm') || file_url.endsWith('.mp4') ? 'video' : file_url.includes('.gif') ? 'gif' : 'image'
  )
}

const throwOnInvalidParameter = (pageNumber, tags, sortProperty, minScore) => {
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
    `sort:${sortProperty}:desc`,
    `score:>=${minScore}`,
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
  const baseApiPostsUrl = `https://api.rule34.xxx/index.php?page=dapi&s=post&q=index`
  const url = `${baseApiPostsUrl}&limit=${PAGE_SIZE}&pid=${pageNumber}`

  return serializedTags === '' ? url : `${url}&tags=${serializedTags}`
}

const throwOnInvalidResponse = (json) => {
  if (typeof json.count !== 'number' || !Array.isArray(json.posts)) {
    throw new Error('Unexpected response received in getPage')
  }
}
