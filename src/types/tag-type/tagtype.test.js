import { getTagTypePriority, hasIcon, isValidTagType } from './tagtype'

describe('tagtype', () => {
  describe('isValidTagType', () => {
    test('undefined returns false', () => {
      expect(isValidTagType(undefined)).toBe(false)
    })

    test('null returns false', () => {
      expect(isValidTagType(null)).toBe(false)
    })

    test('invalid string returns false', () => {
      expect(isValidTagType('example')).toBe(false)
    })

    test('valid strings return true', () => {
      expect(isValidTagType('general')).toBe(true)
      expect(isValidTagType('character')).toBe(true)
      expect(isValidTagType('ambiguous')).toBe(true)
      expect(isValidTagType('artist')).toBe(true)
      expect(isValidTagType('copyright')).toBe(true)
      expect(isValidTagType('rating')).toBe(true)
      expect(isValidTagType('source')).toBe(true)
      expect(isValidTagType('metadata')).toBe(true)
      expect(isValidTagType('supertag')).toBe(true)
    })
  })

  describe('getTagTypePriority', () => {
    test('invalid returns 99', () => {
      expect(getTagTypePriority(undefined)).toBe(99)
      expect(getTagTypePriority(null)).toBe(99)
      expect(getTagTypePriority('')).toBe(99)
      expect(getTagTypePriority('invalid')).toBe(99)
    })

    test('important types are in correct order', () => {
      expect(getTagTypePriority('artist')).toBe(0)
      expect(getTagTypePriority('character')).toBe(1)
      expect(getTagTypePriority('copyright')).toBe(2)
      expect(getTagTypePriority('source')).toBe(3)
      expect(getTagTypePriority('metadata')).toBe(4)
      expect(getTagTypePriority('rating')).toBe(5)
    })

    test('types we dont care about return valid values', () => {
      expect(getTagTypePriority('general')).toBeGreaterThan(5)
      expect(getTagTypePriority('ambiguous')).toBeGreaterThan(5)
      expect(getTagTypePriority('supertag')).toBeGreaterThan(5)
    })
  })

  describe('hasIcon', () => {
    test('returns true for types with icons', () => {
      expect(hasIcon('artist')).toBe(true)
      expect(hasIcon('character')).toBe(true)
      expect(hasIcon('copyright')).toBe(true)
      expect(hasIcon('source')).toBe(true)
      expect(hasIcon('metadata')).toBe(true)
      expect(hasIcon('rating')).toBe(true)
    })

    test('returns false for types without icons', () => {
      expect(hasIcon(undefined)).toBe(false)
      expect(hasIcon(null)).toBe(false)
      expect(hasIcon('')).toBe(false)
      expect(hasIcon('invalid')).toBe(false)
      expect(hasIcon('general')).toBe(false)
      expect(hasIcon('ambiguous')).toBe(false)
      expect(hasIcon('supertag')).toBe(false)
    })
  })
})
