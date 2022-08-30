import { Page } from './Page'

describe('Page', () => {
  describe('constructor', () => {
    test('invalid count throws TypeError', () => {
      expect(() => new Page(undefined, [])).toThrow(TypeError)
    })

    test('invalid post array throws TypeError', () => {
      // @ts-expect-error: passing number ar post here
      expect(() => new Page(1, [12])).toThrow(TypeError)
    })

    test('returns immutable object', () => {
      const page = new Page(1, [])

      expect(() => {
        page.count = 2
      }).toThrow(TypeError)
      expect(() => {
        page.posts = []
      }).toThrow(TypeError)
      expect(() => {
        // @ts-expect-error: attempting to push to readonly
        page.posts.push(1)
      }).toThrow(TypeError)
    })
  })
})
