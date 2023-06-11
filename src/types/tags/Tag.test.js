import { createActiveTagFromTag, createTag } from './Tag'

describe('Tag', () => {
  describe('constructor', () => {
    describe('name', () => {
      test('undefined throws TypeError', () => {
        expect(() => createTag(undefined, 0, 'general')).toThrow(TypeError)
      })

      test('null throws TypeError', () => {
        expect(() => createTag(null, 0, 'general')).toThrow(TypeError)
      })

      test('empty string throws TypeError', () => {
        //@ts-ignore
        expect(() => createTag('', 0, 'general')).toThrow(TypeError)
      })
    })

    describe('count', () => {
      test('undefined throws TypeError', () => {
        expect(() => createTag('example', undefined, 'general')).toThrow(TypeError)
      })

      test('null throws TypeError', () => {
        expect(() => createTag('example', null, 'general')).toThrow(TypeError)
      })

      test('string throws TypeError', () => {
        //@ts-ignore
        expect(() => createTag('example', '', 'general')).toThrow(TypeError)
      })
    })

    test('invalid type throws TypeError', () => {
      expect(() => createTag('example', 0, undefined)).toThrow(TypeError)
    })

    test('produces immutable object', () => {
      const tag = createTag('example', 10, 'general')
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
          expect(() => createActiveTagFromTag(createTag('example', 10, 'general'), undefined)).toThrow(TypeError)
        })

        test('null throws TypeError', () => {
          expect(() => createActiveTagFromTag(createTag('example', 10, 'general'), null)).toThrow(TypeError)
        })

        test('invalid string TypeError', () => {
          // @ts-expect-error
          expect(() => createActiveTagFromTag(createTag('example', 10, 'general'), 'a')).toThrow(TypeError)
        })
      })

      test('contains same modifier and name', () => {
        const searchableTag = createActiveTagFromTag(createTag('example', 10, 'general'), '+')
        expect(searchableTag.modifier).toBe('+')
        expect(searchableTag.name).toBe('example')
        expect(searchableTag.count).toBe(10)
        expect(searchableTag.type).toBe('general')
      })
    })
  })
})
