import { formatDate, formatTime } from "../../../utils/dateFormatHelper.js";
import { hourlyForecastBox } from "./hourlyBox.js";
import { createElement, createTextElement } from "../../../utils/uiElements.js";
import { weatherComponentWrapper } from "../../../utils/skeletonHelper.js";

const hourlyForecastComponent = (weatherData, localTime) => {
  const hourlyContainer = createElement("div", "hourly-forecast");

  const dateContainer = dateHeader(weatherData.date);
  const allHoursContainer = allHourlyBoxes(
    weatherData.hourlyForecast,
    localTime
  );
  hourlyContainer.appendChild(dateContainer);
  hourlyContainer.appendChild(allHoursContainer);

  return hourlyContainer;
};

const dateHeader = (date) => {
  return createTextElement(formatDate(date), "h4");
};

const allHourlyBoxes = (hourlyData, localTime) => {
  const hourlyContainer = createElement("div", "hourly-boxes");
  const currentTime = localTime ? formatTime(localTime) : null;

  hourlyData.forEach((hourData) => {
    const box = hourlyForecastBox(hourData, currentTime);
    hourlyContainer.appendChild(box);
  });
  return hourlyContainer;
};

export const hourlyForecast = weatherComponentWrapper(
  (weatherData, localTime) => hourlyForecastComponent(weatherData, localTime),
  "hourly-forecast"
);
