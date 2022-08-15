import { isValidSortProperty } from "./sort";

describe("isValidSortProperty", () => {
  test("undefined returns false", () => {
    expect(isValidSortProperty(undefined)).toBe(false);
  });

  test("null returns false", () => {
    expect(isValidSortProperty(null)).toBe(false);
  });

  test("number returns false", () => {
    expect(isValidSortProperty(1)).toBe(false);
  });

  test("empty string returns false", () => {
    expect(isValidSortProperty("")).toBe(false);
  });

  test("valid sort properties return true", () => {
    expect(isValidSortProperty("id")).toBe(true);
    expect(isValidSortProperty("score")).toBe(true);
  });
});