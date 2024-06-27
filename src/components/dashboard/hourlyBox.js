import { formatTime } from "../../utils/dateFormatHelper.js";
import { createToggleContainer } from "./unitToggler.js";
import {
  createElement,
  createTextElement,
  createImageElement,
} from "../../utils/uiElements.js";

export const hourlyForecastBox = (hourlyData) => {
  const box = createElement("div");
  const hourBlock = hourContainer(hourlyData.time);
  const conditionTxt = conditionTxtContainer(hourlyData.conditionTxt);
  const conditionIcon = conditionIconContainer(hourlyData.conditionIcon);
  const tempElement = createToggleContainer(
    hourlyData.tempF,
    "F",
    hourlyData.tempC,
    "C",
    "temperature"
  );

  box.appendChild(hourBlock);
  box.appendChild(tempElement);
  box.appendChild(conditionIcon);
  box.appendChild(conditionTxt);
  return box;
};

const hourContainer = (hour) => {
  const timeFormat = formatTime(hour);
  return createTextElement(timeFormat, "div");
};

const conditionTxtContainer = (condition) => {
  return createTextElement(condition, "div");
};

const conditionIconContainer = (url) => {
  return createImageElement(url);
};
