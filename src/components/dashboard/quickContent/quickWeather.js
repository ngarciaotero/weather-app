import { createToggleContainer } from "../../../utils/unitToggler.js";
import {
  createElement,
  createTextElement,
  createImageElement,
} from "../../../utils/uiElements.js";
import { weatherComponentWrapper } from "../../../utils/skeletonHelper.js";
import { sunMoonContainer } from "./sunMoonWeather.js";

const quickWeatherComponent = (weatherData) => {
  const weatherContainer = createElement("div", "quick-weather");

  const location = locationContainer(
    `${weatherData.location.name}, ${weatherData.location.region}`
  );
  const temperature = temperatureContainer({
    tempC: weatherData.current.tempC,
    tempF: weatherData.current.tempF,
  });
  const condition = conditionContainer({
    icon: weatherData.current.conditionIcon,
    text: weatherData.current.conditionTxt,
  });
  const feelsLike = feelsLikeContainer({
    tempC: weatherData.current.feelsLikeC,
    tempF: weatherData.current.feelsLikeF,
  });

  const sunMoon = sunMoonContainer({
    sunrise: weatherData.forecast[0].sunrise,
    sunset: weatherData.forecast[0].sunset,
    moonrise: weatherData.forecast[0].moonrise,
    moonset: weatherData.forecast[0].moonset,
    moonPhase: weatherData.forecast[0].moonPhase,
  });

  weatherContainer.appendChild(location);
  weatherContainer.appendChild(temperature);
  weatherContainer.appendChild(condition);
  weatherContainer.appendChild(feelsLike);
  weatherContainer.appendChild(sunMoon);

  return weatherContainer;
};

const locationContainer = (locationText) => {
  return createTextElement(locationText, "h2");
};

const temperatureContainer = (tempData) => {
  return createToggleContainer(
    tempData.tempF,
    "F",
    tempData.tempC,
    "C",
    "temperature"
  );
};

const conditionContainer = (conditionData) => {
  const container = createElement("div", "condition-container");
  container.appendChild(createImageElement(conditionData.icon));
  container.appendChild(createTextElement(conditionData.text));
  return container;
};

const feelsLikeContainer = (tempData) => {
  const container = createElement("div", "feels-like-container");
  container.appendChild(createTextElement("Feels like:", "span"));
  container.appendChild(
    createToggleContainer(
      tempData.tempF,
      "F",
      tempData.tempC,
      "C",
      "temperature"
    )
  );
  return container;
};

export const quickWeather = weatherComponentWrapper(
  quickWeatherComponent,
  "quick-weather"
);
