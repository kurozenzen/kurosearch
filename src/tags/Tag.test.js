import { Tag } from './Tag'

describe('Tag', () => {
  describe('constructor', () => {
    describe('name', () => {
      test('undefined throws TypeError', () => {
        expect(() => new Tag(undefined, 0, 'general')).toThrow(TypeError)
      })

      test('null throws TypeError', () => {
        expect(() => new Tag(null, 0, 'general')).toThrow(TypeError)
      })

      test('empty string throws TypeError', () => {
        //@ts-ignore
        expect(() => new Tag('', 0, 'general')).toThrow(TypeError)
      })
    })

    describe('count', () => {
      test('undefined throws TypeError', () => {
        expect(() => new Tag('example', undefined, 'general')).toThrow(TypeError)
      })

      test('null throws TypeError', () => {
        expect(() => new Tag('example', null, 'general')).toThrow(TypeError)
      })

      test('string throws TypeError', () => {
        //@ts-ignore
        expect(() => new Tag('example', '', 'general')).toThrow(TypeError)
      })
    })

    test('invalid type throws TypeError', () => {
      expect(() => new Tag('example', 0, undefined)).toThrow(TypeError)
    })

    test('produces immutable object', () => {
      const tag = new Tag('example', 10, 'general')
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

    describe('toActiveTag', () => {
      describe('modifier', () => {
        test('undefined throws TypeError', () => {
          expect(() => new Tag('example', 10, 'general').toActiveTag(undefined)).toThrow(TypeError)
        })

        test('null throws TypeError', () => {
          expect(() => new Tag('example', 10, 'general').toActiveTag(null)).toThrow(TypeError)
        })

        test('invalid string TypeError', () => {
          expect(() => new Tag('example', 10, 'general').toActiveTag('a')).toThrow(TypeError)
        })
      })

      test('contains same modifier and name', () => {
        const searchableTag = new Tag('example', 10, 'general').toActiveTag('+')
        expect(searchableTag.modifier).toBe('+')
        expect(searchableTag.name).toBe('example')
        expect(searchableTag.count).toBe(10)
        expect(searchableTag.type).toBe('general')
      })
    })
  })
})
