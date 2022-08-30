import { formatTagname } from './formatTagname'

describe('formatTagname', () => {
  test('undefined throws TypeError', () => {
    expect(() => formatTagname(undefined)).toThrow(TypeError)
  })

  test('null throws TypeError', () => {
    expect(() => formatTagname(null)).toThrow(TypeError)
  })

  test('number throws TypeError', () => {
    // @ts-expect-error: passing number to string here
    expect(() => formatTagname(2)).toThrow(TypeError)
  })

  test('single word returns itself', () => {
    expect(formatTagname("single")).toBe("single")
  })

  test('two_words replaces underscore', () => {
    expect(formatTagname("two_words")).toBe("two words")
  })

  test('source tags are stripped', () => {
    expect(formatTagname("source:somewhere")).toBe("somewhere")
  })

  test('rating tags are stripped', () => {
    expect(formatTagname("rating:safe")).toBe("safe")
  })
})
