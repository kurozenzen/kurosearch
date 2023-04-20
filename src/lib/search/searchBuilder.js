/**
 * @typedef {import("../../types/blocking-groups/BlockingGroup").BlockingGroup} BlockingGroup
 * @typedef {import("../../types/tags/ActiveTag").ActiveTag} ActiveTag
 * @typedef {import("../../types/post-sort/sort").SortProperty} SortProperty
 * @typedef {import("../../types/tags/Supertag").Supertag} Supertag
 */

import { getCount, getPage } from '../../api-client/pages/pages'
import { BLOCKING_GROUP_TAGS } from '../../types/blocking-groups/BlockingGroup'
import { toSearchableTag } from '../../types/tags/ActiveTag'
import { SearchableTag } from '../../types/tags/SearchableTag'

class SearchBuilder {
  constructor() {
    this.pid = 0
    /** @type {ActiveTag[]} */
    this.tags = []
    /** @type {BlockingGroup[]} */
    this.blockedContent = []
    /** @type {SortProperty} */
    this.sortProperty = 'id'
    this.minScore = 0

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

  /** @param {number} minScore */
  withMinScore(minScore) {
    this.minScore = minScore
    return this
  }

  /** @param {BlockingGroup[]} blockedContent */
  withBlockedContent(blockedContent) {
    this.blockedContent = blockedContent
    return this
  }

  async getPageAndCount() {
    this.tagString = serializeAllTags(this.tags, this.sortProperty, this.minScore, this.blockedContent, this.supertags)
    return Promise.all([this.getPage(), this.getCount()])
  }

  async getPage() {
    this.tagString ||= serializeAllTags(
      this.tags,
      this.sortProperty,
      this.minScore,
      this.blockedContent,
      this.supertags
    )
    return getPage(this.pid, this.tagString)
  }

  async getCount() {
    this.tagString ||= serializeAllTags(
      this.tags,
      this.sortProperty,
      this.minScore,
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
 * @param {number} minScore
 * @param {BlockingGroup[]} blockedContent
 * @param {Supertag[]} availableSupertags
 */
const serializeAllTags = (tags, sortProperty, minScore, blockedContent, availableSupertags) => {
  const activeSupertags = tags.filter((t) => t.type === 'supertag')
  const activeNormalTags = tags.filter((t) => t.type !== 'supertag')

  const parts = [`score:>=${minScore}`, `sort:${sortProperty}:desc`]

  if (activeNormalTags.length > 0) {
    const activeTagString = serializeSearchableTags(activeNormalTags.map((t) => toSearchableTag(t)))
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
      .map((name) => new SearchableTag('-', name))
    const blockedString = serializeSearchableTags(blockedTags)

    parts.push(blockedString)
  }

  const result = parts.join('+')

  console.log('searching for', result)

  // https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&fields=tag_info&json=1&limit=20&pid=0&tags=dog+score:%3E=0+sort:score:desc+(%20lulu_the_fae_sorceress%20~%20poppy%20~%20tristana%20)
  // https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&fields=tag_info&json=1&limit=20&pid=0&tags=dog+(poppy%20~%20lulu_the_fae_sorceress%20~%20tristana)

  return result
}

/**
 * @param {readonly SearchableTag[]} tags
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

/** @param {readonly SearchableTag[]} tags */
const serializeTags = (tags) => tags.map((t) => t.serialize())
