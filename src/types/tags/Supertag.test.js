import { createSupertag } from './Supertag'

describe('Supertag', () => {
  describe('constructor', () => {
    describe('name', () => {
      test('undefined throws TypeError', () => {
        expect(() => createSupertag(undefined, 'description', [])).toThrow(TypeError)
      })

      test('null throws TypeError', () => {
        expect(() => createSupertag(null, 'description', [])).toThrow(TypeError)
      })

      test('empty string throws TypeError', () => {
        expect(() => createSupertag('', 'description', [])).toThrow(TypeError)
      })
    })

    // describe("description", () => {
    //   test("undefined throws TypeError", () => {
    //     expect(() => new Supertag("name", undefined, [])).toThrow(TypeError);
    //   });

    //   test("null throws TypeError", () => {
    //     expect(() => new Supertag("name", undefined, [])).toThrow(TypeError);
    //   });
    // });

    describe('tags', () => {
      test('undefined throws TypeError', () => {
        expect(() => createSupertag('name', 'description', undefined)).toThrow(TypeError)
      })

      test('null throws TypeError', () => {
        expect(() => createSupertag('name', 'description', null)).toThrow(TypeError)
      })

      test('number array throws TypeError', () => {
        // @ts-expect-error
        expect(() => createSupertag('name', 'description', [1, 2])).toThrow(TypeError)
      })
    })

    test('empty tags are valid', () => {
      const tag = createSupertag('name', 'description', [])
      expect(tag.tags).toStrictEqual([])
    })
  })
})
