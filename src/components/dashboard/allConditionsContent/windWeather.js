import {
  widgetBox,
  singleValueWidgetBox,
} from "../../../utils/createWidgetBox.js";
import { createElement } from "../../../utils/uiElements.js";
import { weatherComponentWrapper } from "../../../utils/skeletonHelper.js";

const windWeatherComponent = (weatherData) => {
  const windContainer = createElement("div", "wind-weather");

  const direction = directionContainer(weatherData.current.wind.direction);
  const speed = speedContainer(
    weatherData.current.wind.mph,
    weatherData.current.wind.kph
  );
  const windChill = windChillContainer(
    weatherData.current.wind.chillC,
    weatherData.current.wind.chillF
  );
  const gust = gustContainer(
    weatherData.current.gust.mph,
    weatherData.current.gust.kph
  );

  windContainer.appendChild(direction);
  windContainer.appendChild(speed);
  windContainer.appendChild(windChill);
  windContainer.appendChild(gust);

  return windContainer;
};

const directionContainer = (directionStr) => {
  return singleValueWidgetBox("Wind Direction", directionStr);
};

const speedContainer = (mph, kph) => {
  return widgetBox("Wind Speed", mph, "mph", kph, "kph", "speed");
};

const windChillContainer = (tempC, tempF) => {
  return widgetBox("Wind Chill", tempF, "F", tempC, "C", "temperature");
};

const gustContainer = (mph, kph) => {
  return widgetBox("Gust", mph, "mph", kph, "kph", "speed");
};

export const windWeather = weatherComponentWrapper(
  windWeatherComponent,
  "wind-weather"
);
