import { Post } from './Post'

describe('Post', () => {
  describe('constructor', () => {
    test('returns immutable object', () => {
      const post = new Post(
        '',
        '',
        '',
        '',
        false,
        '',
        1,
        1,
        1,
        1,
        false,
        false,
        1,
        1,
        1,
        '',
        1,
        1,
        1,
        '',
        '',
        '',
        1,
        '',
        '',
        ''
      )

      expect(() => {
        post.preview_url = ''
      }).toThrow(TypeError)
      expect(() => {
        post.sample_url = ''
      }).toThrow(TypeError)
      expect(() => {
        post.file_url = ''
      }).toThrow(TypeError)
      expect(() => {
        post.created_at = ''
      }).toThrow(TypeError)
      expect(() => {
        post.has_children = false
      }).toThrow(TypeError)
      expect(() => {
        post.md5 = ''
      }).toThrow(TypeError)
      expect(() => {
        post.height = 1
      }).toThrow(TypeError)
      expect(() => {
        post.id = 1
      }).toThrow(TypeError)
      expect(() => {
        post.change = 1
      }).toThrow(TypeError)
      expect(() => {
        post.creator_id = 1
      }).toThrow(TypeError)
      expect(() => {
        post.has_notes = false
      }).toThrow(TypeError)
      expect(() => {
        post.has_comments = false
      }).toThrow(TypeError)
      expect(() => {
        post.parent_id = 1
      }).toThrow(TypeError)
      expect(() => {
        post.preview_width = 1
      }).toThrow(TypeError)
      expect(() => {
        post.preview_height = 1
      }).toThrow(TypeError)
      expect(() => {
        post.rating = ''
      }).toThrow(TypeError)
      expect(() => {
        post.sample_height = 1
      }).toThrow(TypeError)
      expect(() => {
        post.sample_width = 1
      }).toThrow(TypeError)
      expect(() => {
        post.score = 1
      }).toThrow(TypeError)
      expect(() => {
        post.source = ''
      }).toThrow(TypeError)
      expect(() => {
        post.status = ''
      }).toThrow(TypeError)
      expect(() => {
        post.tags = ''
      }).toThrow(TypeError)
      expect(() => {
        post.width = 1
      }).toThrow(TypeError)
      expect(() => {
        post.comments_url = ''
      }).toThrow(TypeError)
      expect(() => {
        post.owner_url = ''
      }).toThrow(TypeError)
      expect(() => {
        post.type = ''
      }).toThrow(TypeError)
    })
  })
})
