import { createElement } from "../../utils/uiElements";

export const createToggleContainer = (value1, unit1, value2, unit2, type) => {
  const container = createElement("div", "unit-value");
  container.classList.add(type);
  container.textContent = `${value1} ${unitSymbols[unit1]}`;
  container.dataset[unit1.toLowerCase()] = value1;
  container.dataset[unit2.toLowerCase()] = value2;
  container.dataset.currentUnit = unit1;
  container.dataset.type = type;
  return container;
};

export const updateUnitDisplays = (category) => {
  const allUnitContainers = document.querySelectorAll(
    `.unit-value[data-type="${category}"]`
  );
  allUnitContainers.forEach((container) => {
    const newUnit = unitPreferences[category];
    const newValue = container.dataset[newUnit.toLowerCase()];
    container.textContent = `${newValue} ${unitSymbols[newUnit]}`;
    container.dataset.currentUnit = newUnit;
  });
};

export let unitPreferences = {
  temperature: "F",
  speed: "mph",
  pressure: "inHg",
  precipitation: "in",
};

export const unitOptions = {
  temperature: ["F", "C"],
  speed: ["mph", "kph"],
  pressure: ["inHg", "mb"],
  precipitation: ["in", "mm"],
};

export const unitSymbols = {
  C: "°C",
  F: "°F",
  mph: "mph",
  kph: "kph",
  inHg: "inHg",
  in: "in",
  mb: "mb",
  mm: "mm",
};
