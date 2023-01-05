import { formatCreatedAt } from './formatCreatedAt'

describe('formatCreatedAt', () => {
  const NOW = new Date()
  const ONE_MINUTE = 60_000
  const ONE_HOUR = 60 * ONE_MINUTE
  const ONE_DAY = 24 * ONE_HOUR
  const ONE_WEEK = 7 * ONE_DAY
  const ONE_MONTH = 31 * ONE_DAY
  const ONE_YEAR = 366 * ONE_DAY

  test('undefined throws TypeError', () => {
    expect(() => formatCreatedAt(undefined)).toThrow(TypeError)
  })

  test('null throws TypeError', () => {
    expect(() => formatCreatedAt(null)).toThrow(TypeError)
  })

  test('empty string throws TypeError', () => {
    expect(() => formatCreatedAt('')).toThrow(TypeError)
  })

  test('invalid string throws TypeError', () => {
    expect(() => formatCreatedAt('asdf')).toThrow(TypeError)
  })

  test('number throws TypeError', () => {
    // @ts-expect-error: passing number to string here
    expect(() => formatCreatedAt(3)).toThrow(TypeError)
  })
  ;[
    ['just now', new Date(NOW.getTime() - 50_000).toString()],
    ['1 minute ago', new Date(NOW.getTime() - ONE_MINUTE).toString()],
    ['59 minutes ago', new Date(NOW.getTime() - 59 * ONE_MINUTE).toString()],
    ['1 hour ago', new Date(NOW.getTime() - ONE_HOUR).toString()],
    ['23 hours ago', new Date(NOW.getTime() - 23 * ONE_HOUR).toString()],
    ['1 day ago', new Date(NOW.getTime() - ONE_DAY).toString()],
    ['6 days ago', new Date(NOW.getTime() - 6 * ONE_DAY).toString()],
    ['1 week ago', new Date(NOW.getTime() - ONE_WEEK).toString()],
    ['4 weeks ago', new Date(NOW.getTime() - 4 * ONE_WEEK).toString()],
    ['1 month ago', new Date(NOW.getTime() - ONE_MONTH).toString()],
    ['11 months ago', new Date(NOW.getTime() - 11 * ONE_MONTH).toString()],
    ['1 year ago', new Date(NOW.getTime() - ONE_YEAR).toString()],
    ['10 years ago', new Date(NOW.getTime() - 10 * ONE_YEAR).toString()],
  ].forEach(([expected, input]) => {
    test(expected, () => {
      expect(formatCreatedAt(input)).toBe(expected)
    })
  })
})
