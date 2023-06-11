import { createSearchableTag, serializeSearchableTag } from './SearchableTag'

describe('SearchableTag', () => {
  describe('constructor', () => {
    test('invalid modifier throws TypeError', () => {
      expect(() => createSearchableTag(undefined, 'example')).toThrow(TypeError)
    })

    describe('name', () => {
      test('undefined throws TypeError', () => {
        expect(() => createSearchableTag('+', undefined)).toThrow(TypeError)
      })

      test('null throws TypeError', () => {
        expect(() => createSearchableTag('+', null)).toThrow(TypeError)
      })

      test('empty string throws TypeError', () => {
        //@ts-ignore
        expect(() => createSearchableTag('+', '')).toThrow(TypeError)
      })
    })

    test('produces immutable object', () => {
      const tag = createSearchableTag('+', 'example')
      expect(() => {
        tag.modifier = '-'
      }).toThrow(TypeError)
      expect(() => {
        tag.name = 'something'
      }).toThrow(TypeError)
    })

    describe('serialize', () => {
      test('serialized string does not contain modifier +', () => {
        const tag = createSearchableTag('+', 'example')
        expect(serializeSearchableTag(tag)).toBe('example')
      })

      test('serialized string contains modifier -', () => {
        const tag = createSearchableTag('-', 'example')
        expect(serializeSearchableTag(tag)).toBe('-example')
      })

      test('serialized string does not contain modifier ~', () => {
        const tag = createSearchableTag('~', 'example')
        expect(serializeSearchableTag(tag)).toBe('example')
      })
    })
  })
})
