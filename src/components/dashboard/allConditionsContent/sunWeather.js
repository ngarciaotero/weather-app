import {
  widgetBox,
  singleValueWidgetBox,
} from "../../../utils/createWidgetBox.js";
import { createElement } from "../../../utils/uiElements.js";
import { weatherComponentWrapper } from "../../../utils/skeletonHelper.js";

const sunWeatherComponent = (weatherData) => {
  const sunContainer = createElement("div", "sun-weather");
  const uv = uvContainer(weatherData.current.uvIndex);
  const maxTemp = maxTempContainer(
    weatherData.forecast[0].maxTempC,
    weatherData.forecast[0].maxTempF
  );
  const minTemp = minTempContainer(
    weatherData.forecast[0].minTempC,
    weatherData.forecast[0].minTempF
  );
  const avgTemp = avgTempContainer(
    weatherData.forecast[0].avgTempC,
    weatherData.forecast[0].avgTempF
  );

  sunContainer.appendChild(uv);
  sunContainer.appendChild(maxTemp);
  sunContainer.appendChild(minTemp);
  sunContainer.appendChild(avgTemp);

  return sunContainer;
};

const maxTempContainer = (tempC, tempF) => {
  return widgetBox("Max Temp.", tempF, "F", tempC, "C", "temperature");
};

const minTempContainer = (tempC, tempF) => {
  return widgetBox("Min Temp.", tempF, "F", tempC, "C", "temperature");
};

const avgTempContainer = (tempC, tempF) => {
  return widgetBox("Average Temp.", tempF, "F", tempC, "C", "temperature");
};

const uvContainer = (uvIndex) => {
  const uvInfo = getUVInfo(uvIndex);
  return singleValueWidgetBox(
    `UV Index`,
    `${uvIndex} (${uvInfo.label})`,
    uvInfo.color
  );
};

const uvIndexRanges = [
  { max: 2, label: "Low", color: "#008000" },
  { max: 5, label: "Moderate", color: "#FF9A15" },
  { max: 7, label: "High", color: "#FF4500" },
  { max: 10, label: "Very High", color: "#DC143C" },
  { max: Infinity, label: "Extreme", color: "#8B008B" },
];

const getUVInfo = (uvIndex) => {
  for (const range of uvIndexRanges) {
    if (uvIndex <= range.max) {
      return { label: range.label, color: range.color };
    }
  }
  return { label: "unknown", color: "#000000" };
};

export const sunWeather = weatherComponentWrapper(
  sunWeatherComponent,
  "sun-weather"
);
