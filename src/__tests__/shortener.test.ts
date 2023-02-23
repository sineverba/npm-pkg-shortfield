import { Shortener } from "../index";

describe("Test Shortener", () => {
  it('Should throws error if missing param', () => {
    /**
     * Suppress the error
     */
    // @ts-expect-error
    expect(() => Shortener()).toThrow(Error);
  });
  it("Should return same string if length is lesser than 10 chars", () => {
    var originalString = "foo";
    var result = Shortener(originalString);
    expect(result).toBe("foo");
  });

  it("Should return truncated string if length is equal or greater than 10 chars", () => {
    var originalString = "This is a long string";
    var result = Shortener(originalString);
    expect(result).toBe("This is a ...");
  });

  it("Should return truncated string of 20 chars length", () => {
    var originalString = "This is a very long string";
    var result = Shortener(originalString, 20);
    expect(result).toBe("This is a very long ...");
  });

  it("Should return truncated string of 4 chars length", () => {
    var originalString = "This is a very long string";
    var result = Shortener(originalString, 4);
    expect(result).toBe("This...");
  });
});
