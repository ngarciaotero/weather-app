import { formatDate } from "../../utils/dateFormatHelper.js";
import { hourlyForecastBox } from "./hourlyBox.js";
import { createElement, createTextElement } from "../../utils/uiElements.js";

export const hourlyForecast = (weatherData) => {
  const hourlyContainer = createElement("div");
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
  const hourlyContainer = createElement("div");
  hourlyData.forEach((hourData) => {
    const box = hourlyForecastBox(hourData);
    hourlyContainer.appendChild(box);
  });
  return hourlyContainer;
};
