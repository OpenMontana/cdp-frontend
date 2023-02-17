import { FilterState } from "../reducer";

/**
 * Generate the text representation of a list of checkboxes, by appending the number of selected checkboxes
 * to the defaultText.
 * @param {Object} checkboxes The object representation of the list of checkboxes,
 * where the keys are the different options, and each value is a boolean(whether the option is selected).
 * @param {string} defaultText The default text representation, when no checkboxes are selected.
 * @param {string} selectedText The text prefix when at least one checkbox is selected.
 * @returns {string} The text representation.
 */
const getCheckboxText = (
  checkboxes: FilterState<boolean>,
  defaultText: string,
  selectedText: string
): string => {
  const numberOfSelectedCheckbox = Object.values(checkboxes).filter(
    (dataValue) => dataValue
  ).length;
  const textRep = numberOfSelectedCheckbox
    ? `${selectedText} : ${numberOfSelectedCheckbox}`
    : defaultText;
  return textRep;
};

export default getCheckboxText;
