import {
  widgetBox,
  singleValueWidgetBox,
} from "../../../utils/createWidgetBox.js";
import { createElement } from "../../../utils/uiElements.js";
import { weatherComponentWrapper } from "../../../utils/skeletonHelper.js";

const airWeatherComponent = (weatherData) => {
  const airContainer = createElement("div", "air-weather");

  const aqi = aqiContainer(weatherData.current.aqi);
  const pressure = pressureContainer(
    weatherData.current.pressure.in,
    weatherData.current.pressure.mb
  );
  airContainer.appendChild(aqi);
  airContainer.appendChild(pressure);

  return airContainer;
};

const aqiContainer = (aqiIndex) => {
  const aqiInfo = aqiIndexMapping[aqiIndex] || {
    label: "unknown",
    color: "000000",
  };
  return singleValueWidgetBox("AQI", aqiInfo.label, aqiInfo.color);
};

const pressureContainer = (pressIn, pressMb) => {
  return widgetBox("Pressure", pressIn, "inHg", pressMb, "mb", "pressure");
};

const aqiIndexMapping = {
  1: { label: "Good", color: "#007e00" },
  2: { label: "Moderate", color: "#999900" },
  3: { label: "Unhealthy for Sensitive Groups", color: "#ff4d00" },
  4: { label: "Unhealthy", color: "#cc0000" },
  5: { label: "Very Unhealthy", color: "#650470" },
  6: { label: "Hazardous", color: "#4c0014" },
};

export const airWeather = weatherComponentWrapper(
  airWeatherComponent,
  "air-weather"
);
