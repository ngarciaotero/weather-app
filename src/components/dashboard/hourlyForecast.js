import { formatDate } from "../../utils/dateFormatHelper.js";
import { hourlyForecastBox } from "./hourlyBox.js";
import { createElement, createTextElement } from "../../utils/uiElements.js";
import { weatherComponentWrapper } from "../../utils/skeletonHelper.js";

const hourlyForecastComponent = (weatherData) => {
  const hourlyContainer = createElement("div", "hourly-forecast");

  const dateContainer = dateHeader(weatherData.date);
  const allHoursContainer = allHourlyBoxes(weatherData.hourlyForecast);
  hourlyContainer.appendChild(dateContainer);
  hourlyContainer.appendChild(allHoursContainer);

  return hourlyContainer;
};

const dateHeader = (date) => {
  return createTextElement(formatDate(date), "h5");
};

const allHourlyBoxes = (hourlyData) => {
  const hourlyContainer = createElement("div", "hourly-boxes");
  hourlyData.forEach((hourData) => {
    const box = hourlyForecastBox(hourData);
    hourlyContainer.appendChild(box);
  });
  return hourlyContainer;
};

export const hourlyForecast = weatherComponentWrapper(
  hourlyForecastComponent,
  "hourly-forecast"
);
