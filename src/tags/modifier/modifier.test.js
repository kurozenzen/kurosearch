import { isValidModifier, serializeModifier } from "./modifier";

describe("modifier", () => {
  describe("isValidModifier", () => {
    test("undefined returns false", () => {
      expect(isValidModifier(undefined)).toBe(false);
    });

    test("null returns false", () => {
      expect(isValidModifier(null)).toBe(false);
    });

    test("empty string returns false", () => {
      expect(isValidModifier("")).toBe(false);
    });

    test("invalid modifier returns false", () => {
      expect(isValidModifier("*")).toBe(false);
    });

    test("valid modifiers return true", () => {
      expect(isValidModifier("+")).toBe(true);
      expect(isValidModifier("-")).toBe(true);
      expect(isValidModifier("~")).toBe(true);
    });
  });

  describe("serializeModifier", () => {
    test("invalid modifier throws TypeError", () => {
      expect(() => serializeModifier(undefined)).toThrow(TypeError);
    });
  
    test("+ is stripped", () => {
      expect(serializeModifier("+")).toBe("");
    });

    test("- is not stripped", () => {
      expect(serializeModifier("-")).toBe("-");
    });
  
    test("~ is stripped", () => {
      expect(serializeModifier("~")).toBe("");
    });
  });
});
