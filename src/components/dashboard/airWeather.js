import { widgetBox, singleValueWidgetBox } from "./createWidgetBox.js";
import { createElement } from "../../utils/uiElements.js";

export const airWeather = (weatherData) => {
  const airContainer = createElement("div");
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
  return singleValueWidgetBox("AQI", aqiIndexMapping[aqiIndex]);
};

const pressureContainer = (pressIn, pressMb) => {
  return widgetBox("Pressure", pressIn, "inHg", pressMb, "mb", "pressure");
};

const aqiIndexMapping = {
  1: "Good",
  2: "Moderate",
  3: "Unhealthy for Sensitive Groups",
  4: "Unhealthy",
  5: "Very Unhealthy",
  6: "Hazardous",
};
