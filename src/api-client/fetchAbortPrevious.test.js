import { jest } from "@jest/globals";
import { fetchAbortPrevious } from "./fetchAbortPrevious";

const RESOLVED = true;

//@ts-expect-error
global.fetch = jest.fn(() => Promise.resolve(RESOLVED));

describe("fetchAbortPrevious", () => {
  describe("url", () => {
    test("undefined throws TypeError", () => {
      expect(() => fetchAbortPrevious(undefined, null)).toThrow(TypeError);
    });

    test("null throws TypeError", () => {
      expect(() => fetchAbortPrevious(null, null)).toThrow(TypeError);
    });
  
    test("empty string throws TypeError", () => {
      expect(() => fetchAbortPrevious("", null)).toThrow(TypeError);
    });
  });

  describe("abortController", () => {
    test("undefined throws TypeError", () => {
      expect(() => fetchAbortPrevious("http://localhost", undefined)).toThrow(TypeError);
    });
  
    test("empty object throws TypeError", () => {
      //@ts-expect-error
      expect(() => fetchAbortPrevious("http://localhost", {})).toThrow(TypeError);
    });
  });

  test("aborts previous request with valid abortController", () => {
    const abortController = new AbortController();
    const abortSpy = jest.spyOn(abortController, 'abort');
    fetchAbortPrevious("http://localhost", abortController)
    expect(abortSpy).toBeCalledTimes(1);
  });

  test("does not abort previous request without valid abortController", () => {
    const abortSpy = jest.spyOn(AbortController.prototype, 'abort');
    fetchAbortPrevious("http://localhost", null)
    expect(abortSpy).not.toBeCalled();
  });
});
