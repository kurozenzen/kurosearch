import { Comment } from "./Comment"

describe('Comment', () => {
  describe('constructor', () => {
    test('invalid author throws TypeError', () => {
      expect(() => new Comment(undefined, "2023-04-13 09:29", "Some text")).toThrow(TypeError)
    })

    test('invalid createdAt throws TypeError', () => {
      expect(() => new Comment("kurozenzen", undefined, "Some text")).toThrow(TypeError)
    })

    test('invalid content throws TypeError', () => {
      expect(() => new Comment("kurozenzen", "2023-04-13 09:29", undefined)).toThrow(TypeError)
    })

    test('returns immutable object', () => {
      const comment = new Comment("kurozenzen", "2023-04-13 09:29", "some text")

      expect(() => {
        comment.author = "someone else"
      }).toThrow(TypeError)

      expect(() => {
        comment.createdAt = "another time"
      }).toThrow(TypeError)
      
      expect(() => {
        comment.content = "something else"
      }).toThrow(TypeError)
    })
  })
})
