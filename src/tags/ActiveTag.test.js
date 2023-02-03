import { ActiveTag, toSearchableTag } from './ActiveTag'

describe('ActiveTag', () => {
  describe('constructor', () => {
    test('invalid modifier throws TypeError', () => {
      expect(() => new ActiveTag(undefined, 'example', 0, 'general')).toThrow(TypeError)
    })

    describe('name', () => {
      test('undefined throws TypeError', () => {
        expect(() => new ActiveTag('+', undefined, 0, 'general')).toThrow(TypeError)
      })

      test('null throws TypeError', () => {
        expect(() => new ActiveTag('+', null, 0, 'general')).toThrow(TypeError)
      })

      test('empty string throws TypeError', () => {
        //@ts-ignore
        expect(() => new ActiveTag('+', '', 0, 'general')).toThrow(TypeError)
      })
    })

    describe('count', () => {
      test('undefined throws TypeError', () => {
        expect(() => new ActiveTag('+', 'example', undefined, 'general')).toThrow(TypeError)
      })

      test('null throws TypeError', () => {
        expect(() => new ActiveTag('+', 'example', null, 'general')).toThrow(TypeError)
      })

      test('string throws TypeError', () => {
        //@ts-ignore
        expect(() => new ActiveTag('+', 'example', '', 'general')).toThrow(TypeError)
      })
    })

    test('invalid type throws TypeError', () => {
      expect(() => new ActiveTag('+', 'example', 0, undefined)).toThrow(TypeError)
    })

    test('produces immutable object', () => {
      const tag = new ActiveTag('+', 'example', 10, 'general')
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
        const searchableTag = toSearchableTag(new ActiveTag('+', 'example', 10, 'general'))
        expect(searchableTag.modifier).toBe('+')
        expect(searchableTag.name).toBe('example')
      })
    })
  })
})
