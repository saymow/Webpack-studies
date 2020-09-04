import mdPreviewer from "../src/mdPreviewer";

describe("markdownPreviewer", () => {
  it("should exist", () => {
    expect(mdPreviewer).toBeDefined();
  });
  it("should allow deep references", () => {
    const o = {
      foo: {
        bar: "blah",
      },
    };

    const y = {
      ...o,
    }

    expect(o?.foo?.bar).toBe("blah");
    expect(y).toEqual(o)
  });
});
