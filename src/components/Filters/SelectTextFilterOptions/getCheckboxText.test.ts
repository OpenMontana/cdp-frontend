import getCheckboxText from "./getCheckboxText";

describe("getCheckboxText", () => {
  const defaultText = "default";
  const selectedText = "selected";

  test("Returns defaultText", () => {
    const textRep = getCheckboxText({ a: false, b: false }, defaultText, selectedText);
    expect(textRep).toEqual(defaultText);
  });

  test("Returns number of selected options and defaultText", () => {
    const textRep = getCheckboxText({ a: true, b: false, c: true }, defaultText, selectedText);
    expect(textRep).toEqual(`${selectedText} : 2`);
  });
});
