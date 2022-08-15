import { isValidCount, isValidName } from "./validation";

describe("validation", () => {
  describe("isValidName", () => {
    test("undefined return false", () => {
      expect(isValidName(undefined)).toBe(false);
    });

    test("null returns false", () => {
      expect(isValidName(null)).toBe(false);
    });

    test("number returns false", () => {
      expect(isValidName(10)).toBe(false);
    });

    test("empty string returns false", () => {
      expect(isValidName("")).toBe(false);
    });

    test("non empty string returns true", () => {
      expect(isValidName("a")).toBe(true);
    });
  });

  describe("isValidCount", () => {
    test("undefined returns false", () => {
      expect(isValidCount(undefined)).toBe(false);
    });

    test("null returns false", () => {
      expect(isValidCount(null)).toBe(false);
    });

    test("string returns false", () => {
      expect(isValidCount("a")).toBe(false);
    });

    test("empty string returns false", () => {
      expect(isValidCount("")).toBe(false);
    });

    test("negative number returns false", () => {
      expect(isValidCount(-1)).toBe(false);
    });

    test("zero returns true", () => {
      expect(isValidCount(0)).toBe(true);
    });

    test("positive number returns true", () => {
      expect(isValidCount(1)).toBe(true);
    });
  });
});
