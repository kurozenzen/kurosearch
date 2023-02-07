import { jest } from '@jest/globals'
import { Post } from '../../posts/Post'
import { SearchableTag } from '../../tags/SearchableTag'
import { getComments } from './comments'

const RESOLVED = true

//@ts-expect-error
global.fetch = jest.fn(() => Promise.resolve(RESOLVED))

describe('pages', () => {
  describe('getComments', () => {
    test('invalid postId throws TypeError', () => {
      // @ts-expect-error
      return getComments('a').catch((e) => expect(e).toBeInstanceOf(TypeError))
    })

    test('response not ok throws Error', () => {
      const originalFetch = global.fetch
      //@ts-expect-error
      global.fetch = jest.fn(() => Promise.resolve({ ok: false }))

      getComments(0).catch((e) => expect(e).toBeInstanceOf(Error))
      global.fetch = originalFetch
    })

    test('parses comments with postId', async () => {
      const originalFetch = global.fetch
      //@ts-expect-error
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          text: () =>
            Promise.resolve(
              '<comments type="array"><comment created_at="2023-01-01 10:20" post_id="3" body="comment" creator="kurozenzen" id="2" creator_id="1"/></comments>'
            ),
        })
      )

      const comments = await getComments(0)
      expect(comments.length).toBe(1)
      expect(comments[0]).toEqual({ author: 'kurozenzen', createdAt: '2023-01-01 10:20', content: 'comment' })

      global.fetch = originalFetch
    })

    test('parses comments without postId', async () => {
      const originalFetch = global.fetch
      //@ts-expect-error
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          text: () =>
            Promise.resolve(
              '<comments type="array"><comment created_at="2023-01-01 10:20" post_id="3" body="comment" creator="kurozenzen" id="2" creator_id="1"/></comments>'
            ),
        })
      )

      const comments = await getComments()
      expect(comments.length).toBe(1)
      expect(comments[0]).toEqual({ author: 'kurozenzen', createdAt: '2023-01-01 10:20', content: 'comment' })

      global.fetch = originalFetch
    })
  })
})
