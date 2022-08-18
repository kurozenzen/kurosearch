import { jest } from '@jest/globals'
import { SearchableTag } from '../../tags/SearchableTag'
import { getPage, getPostsUrl, isValidMinScore, isValidPageNumber, isValidTagsArray, serializeTags } from './pages'

const RESOLVED = true

//@ts-expect-error
global.fetch = jest.fn(() => Promise.resolve(RESOLVED))

describe('pages', () => {
  describe('isValidPageNumber', () => {
    test('undefined returns false', () => {
      expect(isValidPageNumber(undefined)).toBe(false)
    })

    test('null returns false', () => {
      expect(isValidPageNumber(null)).toBe(false)
    })

    test('string returns false', () => {
      expect(isValidPageNumber('a')).toBe(false)
    })

    test('negative number returns false', () => {
      expect(isValidPageNumber(-1)).toBe(false)
    })

    test('0 returns true', () => {
      expect(isValidPageNumber(0)).toBe(true)
    })

    test('positive numbers return true', () => {
      expect(isValidPageNumber(1)).toBe(true)
      expect(isValidPageNumber(1000)).toBe(true)
    })
  })

  describe('isValidTagsArray', () => {
    test('undefined returns false', () => {
      expect(isValidTagsArray(undefined)).toBe(false)
    })

    test('null returns false', () => {
      expect(isValidTagsArray(null)).toBe(false)
    })

    test('string returns false', () => {
      expect(isValidTagsArray('a')).toBe(false)
    })

    test('number[] returns false', () => {
      expect(isValidTagsArray([1, 2, 3])).toBe(false)
    })

    test('SearchableTag[] return true', () => {
      expect(isValidTagsArray([new SearchableTag('+', 'example')])).toBe(true)
    })
  })

  describe('isValidMinScore', () => {
    test('undefined returns false', () => {
      expect(isValidMinScore(undefined)).toBe(false)
    })

    test('null returns false', () => {
      expect(isValidMinScore(null)).toBe(false)
    })

    test('string returns false', () => {
      expect(isValidMinScore('a')).toBe(false)
    })

    test('negative number returns false', () => {
      expect(isValidMinScore(-1)).toBe(false)
    })

    test('0 returns true', () => {
      expect(isValidMinScore(0)).toBe(true)
    })

    test('positive numbers return true', () => {
      expect(isValidMinScore(1)).toBe(true)
      expect(isValidMinScore(1000)).toBe(true)
    })
  })

  describe('getPage', () => {
    test('invalid page number throws TypeError', () => {
      expect.assertions(1)
      return getPage(undefined, [], 'id', 0).catch((e) => expect(e).toBeInstanceOf(TypeError))
    })

    test('invalid tag array throws TypeError', () => {
      expect.assertions(1)
      return getPage(0, undefined, 'id', 0).catch((e) => expect(e).toBeInstanceOf(TypeError))
    })

    test('invalid sort returns TypeError', () => {
      expect.assertions(1)
      return getPage(0, [], undefined, 0).catch((e) => expect(e).toBeInstanceOf(TypeError))
    })

    test('invalid minScore TypeError', () => {
      expect.assertions(1)
      return getPage(0, [], 'id', undefined).catch((e) => expect(e).toBeInstanceOf(TypeError))
    })
  })

  describe('getPostsUrl', () => {
    test('does not include tags when they are empty', () => {
      expect(getPostsUrl(0, '')).toBe('https://r34-json.herokuapp.com/v2/posts?limit=20&pid=0')
    })

    test('includes tags when they are not empty', () => {
      expect(getPostsUrl(0, 'example')).toBe('https://r34-json.herokuapp.com/v2/posts?limit=20&pid=0&tags=example')
    })
  })

  describe('serializeTags', () => {
    test('empty tags still include sort and score', () => {
      expect(serializeTags([], 'id', 0)).toBe('sort:id:desc+score:>=0')
    })

    test('+ tags are included in string', () => {
      expect(serializeTags([new SearchableTag('+', 'tag1'), new SearchableTag('+', 'tag2')], 'id', 0)).toBe(
        'tag1+tag2+sort:id:desc+score:>=0'
      )
    })

    test('- tags are included in string', () => {
      expect(serializeTags([new SearchableTag('+', 'tag1'), new SearchableTag('-', 'tag2')], 'id', 0)).toBe(
        'tag1+-tag2+sort:id:desc+score:>=0'
      )
    })
    test('~ tags are included in string', () => {
      expect(serializeTags([new SearchableTag('~', 'tag2'), new SearchableTag('~', 'tag3')], 'id', 0)).toBe(
        'sort:id:desc+score:>=0+( tag2 ~ tag3 )'
      )
    })
  })
})
