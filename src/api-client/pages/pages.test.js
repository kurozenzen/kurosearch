import { jest } from '@jest/globals'
import { Post } from '../../types/post/Post'
import { SearchableTag } from '../../types/tags/SearchableTag'
import {
  getPage,
  getPostsUrl,
  isValidMinScore,
  isValidPageNumber,
  isValidTagsArray,
  serializeSearchParameters,
} from './pages'

const RESOLVED = true
const EMPTY_POST = new Post(
  '',  // preview_url
  '',  // sample_url
  '',  // file_url
  1,  // comment_count
  1,  // height
  1,  // id
  1,  // change
  1,  // parent_id
  'explicit',  // rating
  1,  // sample_height
  1,  // sample_width
  1,  // score
  '',  // source
  'active',  // status
  [],  // tags
  1,  // width
  ''  // type
)

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
    // test('invalid page number throws TypeError', () => {
    //   expect.assertions(1)
    //   return getPage(undefined, [], 'id', 0).catch((e) => expect(e).toBeInstanceOf(TypeError))
    // })

    // test('invalid tag array throws TypeError', () => {
    //   expect.assertions(1)
    //   return getPage(0, undefined, 'id', 0).catch((e) => expect(e).toBeInstanceOf(TypeError))
    // })

    // test('invalid sort returns TypeError', () => {
    //   expect.assertions(1)
    //   return getPage(0, [], undefined, 0).catch((e) => expect(e).toBeInstanceOf(TypeError))
    // })

    // test('invalid minScore TypeError', () => {
    //   expect.assertions(1)
    //   return getPage(0, [], 'id', undefined).catch((e) => expect(e).toBeInstanceOf(TypeError))
    // })

    test('response not ok throws Error', () => {
      const originalFetch = global.fetch
      //@ts-expect-error
      global.fetch = jest.fn(() => Promise.resolve({ ok: false }))

      expect.assertions(1)
      getPage(0, "").catch((e) => expect(e).toBeInstanceOf(Error))
      global.fetch = originalFetch
    })

    test('empty response return []', () => {
      const originalFetch = global.fetch
      //@ts-expect-error
      global.fetch = jest.fn(() => Promise.resolve({ ok: true, json: () => Promise.reject(null) }))
      
      getPage(0, "").catch((e) => expect(e).toBeInstanceOf(Error))
      global.fetch = originalFetch
    })

    // cannot return array from promise - seems like i am stupid
    // test('returns a valid Page', async () => {
    //   const originalFetch = global.fetch
    //   //@ts-expect-error
    //   global.fetch = jest.fn(() => Promise.resolve({ ok: true, json: () => Promise.resolve({ valid: true }) }))

    //   expect.assertions(1)
    //   const page = await getPage(0, [], 'id', 0)

    //   expect(page).toStrictEqual({ valid: true})

    //   global.fetch = originalFetch
    // })
  })

  describe('getPostsUrl', () => {
    test('does not include tags when they are empty', () => {
      expect(getPostsUrl(0, '')).toBe('https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&fields=tag_info&json=1&limit=20&pid=0')
    })

    test('includes tags when they are not empty', () => {
      expect(getPostsUrl(0, 'example')).toBe(
        'https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&fields=tag_info&json=1&limit=20&pid=0&tags=example'
      )
    })
  })

  describe('serializeTags', () => {
    test('empty tags still include sort and score', () => {
      expect(serializeSearchParameters([], 'id', 0)).toBe('score:>=0+sort:id:desc')
    })

    test('+ tags are included in string', () => {
      expect(serializeSearchParameters([new SearchableTag('+', 'tag1'), new SearchableTag('+', 'tag2')], 'id', 0)).toBe(
        'tag1+tag2+score:>=0+sort:id:desc'
      )
    })

    test('- tags are included in string', () => {
      expect(serializeSearchParameters([new SearchableTag('+', 'tag1'), new SearchableTag('-', 'tag2')], 'id', 0)).toBe(
        'tag1+-tag2+score:>=0+sort:id:desc'
      )
    })
    test('~ tags are included in string', () => {
      expect(serializeSearchParameters([new SearchableTag('~', 'tag2'), new SearchableTag('~', 'tag3')], 'id', 0)).toBe(
        'score:>=0+sort:id:desc+( tag2 ~ tag3 )'
      )
    })
  })
})
