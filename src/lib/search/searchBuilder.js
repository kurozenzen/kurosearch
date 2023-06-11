/**
 * @typedef {import("../../types/definitions").BlockingGroup} BlockingGroup
 * @typedef {import("../../types/definitions").ActiveTag} ActiveTag
 * @typedef {import("../../types/definitions").SortProperty} SortProperty
 * @typedef {import("../../types/definitions").SortDirection} SortDirection
 * @typedef {import("../../types/definitions").ScoreComparator} ScoreComparator
 * @typedef {import("../../types/definitions").Supertag} Supertag
 * @typedef {import("../../types/definitions").SearchableTag} SearchableTag
 */

import { getCount, getPage } from '../../api-client/pages/pages'
import { BLOCKING_GROUP_TAGS } from '../../types/blocking-groups/BlockingGroup'
import { createSearchableTagFromActiveTag } from '../../types/tags/ActiveTag'
import { createSearchableTag, serializeSearchableTag } from '../../types/tags/SearchableTag'

class SearchBuilder {
  constructor() {
    this.pid = 0
    /** @type {ActiveTag[]} */
    this.tags = []
    /** @type {BlockingGroup[]} */
    this.blockedContent = []
    /** @type {SortProperty} */
    this.sortProperty = 'id'
    /** @type {SortDirection} */
    this.sortDirection = 'desc'
    this.scoreValue = 0
    /** @type {ScoreComparator} */
    this.scoreComparator = '>='

    this.tagString = null
  }

  /** @param {number} pid */
  withPid(pid) {
    this.pid = pid
    return this
  }

  /** @param {ActiveTag[]} tags */
  withTags(tags) {
    this.tags = tags
    return this
  }

  /** @param {Supertag[]} supertags */
  withSupertags(supertags) {
    this.supertags = supertags
    return this
  }

  /** @param {SortProperty} sortProperty */
  withSortProperty(sortProperty) {
    this.sortProperty = sortProperty
    return this
  }

  /** @param {SortDirection} sortDirection */
  withSortDirection(sortDirection) {
    this.sortDirection = sortDirection
    return this
  }

  /** @param {number} scoreValue */
  withScoreValue(scoreValue) {
    this.scoreValue = scoreValue
    return this
  }

  /** @param {ScoreComparator} scoreComparator */
  withScoreComparator(scoreComparator) {
    this.scoreComparator = scoreComparator
    return this
  }

  /** @param {BlockingGroup[]} blockedContent */
  withBlockedContent(blockedContent) {
    this.blockedContent = blockedContent
    return this
  }

  async getPageAndCount() {
    this.tagString = serializeAllTags(
      this.tags,
      this.sortProperty,
      this.sortDirection,
      this.scoreValue,
      this.scoreComparator,
      this.blockedContent,
      this.supertags
    )
    return Promise.all([this.getPage(), this.getCount()])
  }

  async getPage() {
    this.tagString ||= serializeAllTags(
      this.tags,
      this.sortProperty,
      this.sortDirection,
      this.scoreValue,
      this.scoreComparator,
      this.blockedContent,
      this.supertags
    )
    return getPage(this.pid, this.tagString)
  }

  async getCount() {
    this.tagString ||= serializeAllTags(
      this.tags,
      this.sortProperty,
      this.sortDirection,
      this.scoreValue,
      this.scoreComparator,
      this.blockedContent,
      this.supertags
    )
    return getCount(this.tagString)
  }
}

export const createSearch = () => {
  return new SearchBuilder()
}

/**
 * @param {ActiveTag[]} tags
 * @param {SortProperty} sortProperty
 * @param {SortDirection} sortDirection
 * @param {number} scoreValue
 * @param {ScoreComparator} scoreComparator
 * @param {BlockingGroup[]} blockedContent
 * @param {Supertag[]} availableSupertags
 */
const serializeAllTags = (
  tags,
  sortProperty,
  sortDirection,
  scoreValue,
  scoreComparator,
  blockedContent,
  availableSupertags
) => {
  const activeSupertags = tags.filter((t) => t.type === 'supertag')
  const activeNormalTags = tags.filter((t) => t.type !== 'supertag')

  const parts = [`score:${scoreComparator}${scoreValue}`, `sort:${sortProperty}:${sortDirection}`]

  if (activeNormalTags.length > 0) {
    const activeTagString = serializeSearchableTags(activeNormalTags.map(createSearchableTagFromActiveTag))
    parts.push(activeTagString)
  }
  if (activeSupertags.length > 0) {
    const supertagString = activeSupertags
      .map((active) => availableSupertags.find((available) => active.name === available.name).tags)
      .map((tags) => `${serializeSearchableTags(tags)}`)
      .join('+')
    parts.push(supertagString)
  }
  if (blockedContent.length > 0) {
    const blockedTags = blockedContent
      .flatMap((groupName) => BLOCKING_GROUP_TAGS[groupName])
      .map((name) => createSearchableTag('-', name))
    const blockedString = serializeSearchableTags(blockedTags)

    parts.push(blockedString)
  }

  const result = parts.join('+')

  return result
}

/**
 * @param {SearchableTag[]} tags
 */
const serializeSearchableTags = (tags) => {
  const tagsByModifier = partitionTagsByModifier(tags)
  let parts = [...serializeTags([...tagsByModifier['+'], ...tagsByModifier['-']])]

  if (tagsByModifier['~'].length > 0) {
    parts.push(`( ${serializeTags(tagsByModifier['~']).join(' ~ ')} )`)
  }

  return parts.join('+')
}

/** @param {SearchableTag[]} tags*/
const partitionTagsByModifier = (tags) => {
  const partitions = {
    '+': [],
    '-': [],
    '~': [],
  }

  tags.forEach((t) => partitions[t.modifier].push(t))

  return partitions
}

/** @param {SearchableTag[]} tags */
const serializeTags = (tags) => tags.map(serializeSearchableTag)
