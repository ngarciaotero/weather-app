import { createToggleContainer } from "./unitToggler.js";
import {
  createElement,
  createTextElement,
  createImageElement,
} from "../../utils/uiElements.js";

export const quickWeather = (weatherData) => {
  const weatherContainer = createElement("div");
  const location = locationContainer(
    weatherData.location.name,
    weatherData.location.region
  );
  const temperature = temperatureContainer(
    weatherData.current.tempC,
    weatherData.current.tempF
  );
  const condition = conditionContainer(
    weatherData.current.conditionIcon,
    weatherData.current.conditionTxt
  );
  const feelsLike = feelsLikeContainer(
    weatherData.current.feelsLikeC,
    weatherData.current.feelsLikeF
  );

  weatherContainer.appendChild(location);
  weatherContainer.appendChild(temperature);
  weatherContainer.appendChild(condition);
  weatherContainer.appendChild(feelsLike);

  return weatherContainer;
};

const conditionContainer = (icon, text) => {
  const container = createElement("div");
  const conditionImg = createImageElement(icon);
  const conditionTxt = createTextElement(text);

  container.appendChild(conditionImg);
  container.appendChild(conditionTxt);

  return container;
};

const locationContainer = (name, region) => {
  return createTextElement(`${name}, ${region}`, "h2");
};

const temperatureContainer = (tempC, tempF) => {
  return createToggleContainer(tempF, "F", tempC, "C", "temperature");
};

const feelsLikeContainer = (tempC, tempF) => {
  const container = createElement("div");
  const text = createTextElement("Feels like:", "span");
  container.appendChild(text);
  container.appendChild(
    createToggleContainer(tempF, "F", tempC, "C", "temperature")
  );
  return container;
};
