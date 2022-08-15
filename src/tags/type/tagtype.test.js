import { isValidTagType } from "./tagtype";

describe("tagtype", () => {
  describe("isValidTagType", () => {
    test("undefined returns false", () => {
      expect(isValidTagType(undefined)).toBe(false);
    });

    test("null returns false", () => {
      expect(isValidTagType(null)).toBe(false);
    });

    test("invalid string returns false", () => {
      expect(isValidTagType("example")).toBe(false);
    });

    test("valid strings return true", () => {
      expect(isValidTagType("general")).toBe(true);
      expect(isValidTagType("character")).toBe(true);
      expect(isValidTagType("ambiguous")).toBe(true);
      expect(isValidTagType("artist")).toBe(true);
      expect(isValidTagType("copyright")).toBe(true);
      expect(isValidTagType("rating")).toBe(true);
      expect(isValidTagType("source")).toBe(true);
      expect(isValidTagType("metadata")).toBe(true);
      expect(isValidTagType("supertag")).toBe(true);
    });
  });
});
