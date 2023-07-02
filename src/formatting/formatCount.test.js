import { formatCount } from './formatCount'

describe('formatCount', () => {
  ;[
    ['1', 1],
    ['999', 999],
    ['1K', 1000],
    ['1M', 999999],
    ['1M', 1000000],
    ['1B', 999999999],
    ['-', undefined],
    ['-', null],
    ['-', 'asdf'],
  ].forEach(([expected, input]) => {
    // @ts-ignore
    test(expected, () => {
      // @ts-ignore
      expect(formatCount(input)).toBe(expected)
    })
  })
})
