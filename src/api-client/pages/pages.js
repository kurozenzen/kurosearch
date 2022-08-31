import { Page } from '../../posts/Page'
import { Post } from '../../posts/Post'
import { isValidSortProperty } from '../../posts/sort/sort'
import { SearchableTag } from '../../tags/SearchableTag'
import { fetchAbortPrevious } from '../fetchAbortPrevious'

/**
 * @typedef {import('../../posts/sort/sort').SortProperty} SortProperty
 */

export const PAGE_SIZE = 20
const BASE_URL = 'https://r34-json.herokuapp.com/v2'

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

  const json = await response.json()
  throwOnInvalidResponse(json)

  return new Page(
    json.count,
    json.posts.map((p) => Post.from(p))
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
    '~': []
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
    `score:>=${minScore}`
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
  const url = `${BASE_URL}/posts?limit=${PAGE_SIZE}&pid=${pageNumber}`

  return serializedTags === '' ? url : `${url}&tags=${serializedTags}`
}

const throwOnInvalidResponse = (json) => {
  if (typeof json.count !== 'number' || !Array.isArray(json.posts)) {
    throw new Error('Unexpected response received in getPage')
  }
}
