import { formatCount } from './formatCount'

describe('formatCount', () => {
  test('undefined throws TypeError', () => {
    expect(() => formatCount(undefined)).toThrow(TypeError)
  })

  test('null throws TypeError', () => {
    expect(() => formatCount(null)).toThrow(TypeError)
  })

  test('string throws TypeError', () => {
    // @ts-expect-error: passing string to number here
    expect(() => formatCount('asdf')).toThrow(TypeError)
  })
  ;[
    ['1', 1],
    ['999', 999],
    ['1K', 1000],
    ['1M', 999999],
    ['1M', 1000000],
    ['1B', 999999999],
  ].forEach(([expected, input]) => {
    // @ts-ignore
    test(expected, () => {
      // @ts-ignore
      expect(formatCount(input)).toBe(expected)
    })
  })
})
