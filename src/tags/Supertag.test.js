import { Supertag } from "./Supertag";

describe("Supertag", () => {
  describe("constructor", () => {
    describe("name", () => {
      test("undefined throws TypeError", () => {
        expect(() => new Supertag(undefined, "description", [])).toThrow(
          TypeError
        );
      });

      test("null throws TypeError", () => {
        expect(() => new Supertag(null, "description", [])).toThrow(TypeError);
      });

      test("empty string throws TypeError", () => {
        expect(() => new Supertag("", "description", [])).toThrow(TypeError);
      });
    });

    // describe("description", () => {
    //   test("undefined throws TypeError", () => {
    //     expect(() => new Supertag("name", undefined, [])).toThrow(TypeError);
    //   });

    //   test("null throws TypeError", () => {
    //     expect(() => new Supertag("name", undefined, [])).toThrow(TypeError);
    //   });
    // });

    describe("tags", () => {
      test("undefined throws TypeError", () => {
        expect(() => new Supertag("name", "description", undefined)).toThrow(TypeError);
      });

      test("null throws TypeError", () => {
        expect(() => new Supertag("name", "description", null)).toThrow(TypeError);
      });

      test("number array throws TypeError", () => {
        // @ts-expect-error
        expect(() => new Supertag("name", "description", [1,2])).toThrow(TypeError);
      });
    });

    test("empty tags are valid", () => {
      const tag = new Supertag("name", "description", []);
      expect(tag.tags).toStrictEqual([]);
    })
  });
});
