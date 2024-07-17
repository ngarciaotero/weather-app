import {
  unitSymbols,
  unitOptions,
  unitPreferences,
  updateUnitDisplays,
} from "../../../utils/unitToggler.js";
import { createElement, createTextElement } from "../../../utils/uiElements.js";

export const unitTogglePreferences = () => {
  const preferenceContainer = createElement("div", "unit-preferences");
  const header = preferenceHeader("h4", "Unit Preferences");
  const options = preferenceOptions();

  preferenceContainer.appendChild(header);
  preferenceContainer.appendChild(options);

  return preferenceContainer;
};

const preferenceOptions = () => {
  const optionContainer = createElement("div", "unit-options");

  for (const [category, units] of Object.entries(unitOptions)) {
    const categoryLabel = categoryTxt(category);
    const unitInputs = unitInput(category, units);

    optionContainer.appendChild(categoryLabel);
    optionContainer.appendChild(unitInputs);
  }
  return optionContainer;
};

const preferenceHeader = (headerType, headerTxt) => {
  return createTextElement(headerTxt, headerType);
};

const unitInput = (category, units) => {
  const inputsContainer = createElement("div", "unit-inputs");
  units.forEach((unit) => {
    const input = createElement("input");
    input.type = "radio";
    input.id = `${category}-${unit}`;
    input.name = category;
    input.value = unit;
    input.checked = unit === unitPreferences[category];

    input.addEventListener("change", (event) => {
      if (event.target.checked) {
        unitPreferences[category] = unit;
        updateUnitDisplays(category);
      }
    });

    const label = createTextElement(unitSymbols[unit], "label");
    label.for = `${category}-${unit}`;

    inputsContainer.appendChild(input);
    inputsContainer.appendChild(label);
  });

  return inputsContainer;
};

const categoryTxt = (category) => {
  return createTextElement(`${capitalize(category)}: `);
};

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
