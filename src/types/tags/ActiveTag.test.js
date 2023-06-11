import { createActiveTag, createSearchableTagFromActiveTag } from './ActiveTag'

describe('ActiveTag', () => {
  describe('constructor', () => {
    test('invalid modifier throws TypeError', () => {
      expect(() => createActiveTag(undefined, 'example', 0, 'general')).toThrow(TypeError)
    })

    describe('name', () => {
      test('undefined throws TypeError', () => {
        expect(() => createActiveTag('+', undefined, 0, 'general')).toThrow(TypeError)
      })

      test('null throws TypeError', () => {
        expect(() => createActiveTag('+', null, 0, 'general')).toThrow(TypeError)
      })

      test('empty string throws TypeError', () => {
        //@ts-ignore
        expect(() => createActiveTag('+', '', 0, 'general')).toThrow(TypeError)
      })
    })

    describe('count', () => {
      test('undefined throws TypeError', () => {
        expect(() => createActiveTag('+', 'example', undefined, 'general')).toThrow(TypeError)
      })

      test('null throws TypeError', () => {
        expect(() => createActiveTag('+', 'example', null, 'general')).toThrow(TypeError)
      })

      test('string throws TypeError', () => {
        //@ts-ignore
        expect(() => createActiveTag('+', 'example', '', 'general')).toThrow(TypeError)
      })
    })

    test('invalid type throws TypeError', () => {
      expect(() => createActiveTag('+', 'example', 0, undefined)).toThrow(TypeError)
    })

    test('produces immutable object', () => {
      const tag = createActiveTag('+', 'example', 10, 'general')
      expect(() => {
        tag.modifier = '-'
      }).toThrow(TypeError)
      expect(() => {
        tag.name = 'something'
      }).toThrow(TypeError)
      expect(() => {
        tag.count = 12
      }).toThrow(TypeError)
      expect(() => {
        tag.type = 'artist'
      }).toThrow(TypeError)
    })

    describe('toSearchableTag', () => {
      test('contains same modifier and name', () => {
        const activeTag = createActiveTag('+', 'example', 10, 'general')
        const searchableTag = createSearchableTagFromActiveTag(activeTag)
        expect(searchableTag.modifier).toBe('+')
        expect(searchableTag.name).toBe('example')
      })
    })
  })
})
