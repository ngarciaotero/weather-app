import { formatTime, isCurrentHour } from "../../../utils/dateFormatHelper.js";
import { createToggleContainer } from "../../../utils/unitToggler.js";
import {
  createElement,
  createTextElement,
  createImageElement,
} from "../../../utils/uiElements.js";
import { createSkeletonText } from "../../../utils/skeletonHelper.js";

export const hourlyForecastBox = (hourlyData, currentTime) => {
  const boxContainer = createElement("div", "hourly-box");

  if (!hourlyData) {
    boxContainer.appendChild(createSkeletonText("40px", "1em"));
    boxContainer.appendChild(createSkeletonText("40px", "1em"));
    boxContainer.appendChild(createSkeletonText("40px", "1em"));
    boxContainer.appendChild(createSkeletonText("40px", "1em"));
    return boxContainer;
  }

  const hourBlock = hourContainer(hourlyData.time, currentTime, boxContainer);
  const conditionTxt = conditionTxtContainer(hourlyData.conditionTxt);
  const conditionIcon = conditionIconContainer(hourlyData.conditionIcon);
  const tempElement = createToggleContainer(
    hourlyData.tempF,
    "F",
    hourlyData.tempC,
    "C",
    "temperature"
  );

  boxContainer.appendChild(hourBlock);
  boxContainer.appendChild(tempElement);
  boxContainer.appendChild(conditionIcon);
  boxContainer.appendChild(conditionTxt);
  return boxContainer;
};

const hourContainer = (hour, currentTime, boxContainer) => {
  const timeFormat = formatTime(hour);

  if (currentTime && isCurrentHour(timeFormat, currentTime)) {
    boxContainer.classList.add("current-hour");
  }
  return createTextElement(timeFormat, "div");
};

const conditionTxtContainer = (condition) => {
  return createTextElement(condition, "div");
};

const conditionIconContainer = (url) => {
  return createImageElement(url);
};
