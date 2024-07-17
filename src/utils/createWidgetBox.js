import { createToggleContainer } from "./unitToggler.js";
import { createElement, createTextElement } from "./uiElements.js";

export const widgetBox = (
  categoryLabel,
  value1,
  symbol1,
  value2,
  symbol2,
  unitType
) => {
  const box = createElement("div", "widget-box");
  const label = createTextElement(categoryLabel, "div");
  const value = createToggleContainer(
    value1,
    symbol1,
    value2,
    symbol2,
    unitType
  );

  box.appendChild(label);
  box.appendChild(value);
  return box;
};

export const singleValueWidgetBox = (categoryLabel, value1, color = null) => {
  const box = createElement("div", "widget-box");
  const label = createTextElement(categoryLabel, "div");
  const value = createTextElement(value1, "div");

  if (color) {
    value.style.color = color;
  }

  box.appendChild(label);
  box.appendChild(value);
  return box;
};
