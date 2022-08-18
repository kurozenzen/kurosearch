import { SearchableTag } from './SearchableTag'

describe('SearchableTag', () => {
  describe('constructor', () => {
    test('invalid modifier throws TypeError', () => {
      expect(() => new SearchableTag(undefined, 'example')).toThrow(TypeError)
    })

    describe('name', () => {
      test('undefined throws TypeError', () => {
        expect(() => new SearchableTag('+', undefined)).toThrow(TypeError)
      })

      test('null throws TypeError', () => {
        expect(() => new SearchableTag('+', null)).toThrow(TypeError)
      })

      test('empty string throws TypeError', () => {
        //@ts-ignore
        expect(() => new SearchableTag('+', '')).toThrow(TypeError)
      })
    })

    test('produces immutable object', () => {
      const tag = new SearchableTag('+', 'example')
      expect(() => {
        tag.modifier = '-'
      }).toThrow(TypeError)
      expect(() => {
        tag.name = 'something'
      }).toThrow(TypeError)
    })

    describe('serialize', () => {
      test('serialized string does not contain modifier +', () => {
        const tag = new SearchableTag('+', 'example')
        expect(tag.serialize()).toBe('example')
      })

      test('serialized string contains modifier -', () => {
        const tag = new SearchableTag('-', 'example')
        expect(tag.serialize()).toBe('-example')
      })

      test('serialized string does not contain modifier ~', () => {
        const tag = new SearchableTag('~', 'example')
        expect(tag.serialize()).toBe('example')
      })
    })
  })
})
