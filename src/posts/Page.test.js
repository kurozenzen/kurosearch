import { Page } from './Page'

describe('Page', () => {
  describe('constructor', () => {
    test('invalid post array throws TypeError', () => {
      // @ts-expect-error: passing number ar post here
      expect(() => new Page([12])).toThrow(TypeError)
    })

    test('returns immutable object', () => {
      const page = new Page([])

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
