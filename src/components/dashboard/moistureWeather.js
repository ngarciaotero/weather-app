import { widgetBox, singleValueWidgetBox } from "./createWidgetBox.js";
import { createElement } from "../../utils/uiElements.js";

export const moistureWeather = (weatherData) => {
  const moistureContainer = createElement("div");
  const humidity = humidityContainer(weatherData.current.humidity);
  const precipitation = precipitationContainer(
    weatherData.current.precipitation.in,
    weatherData.current.precipitation.mm
  );
  const dewPoint = dewPointContainer(
    weatherData.current.dewPointC,
    weatherData.current.dewPointF
  );

  moistureContainer.appendChild(humidity);
  moistureContainer.appendChild(precipitation);
  moistureContainer.appendChild(dewPoint);

  return moistureContainer;
};

const humidityContainer = (humidityValue) => {
  return singleValueWidgetBox("Humidity", `${humidityValue}%`);
};
const precipitationContainer = (preIn, preMm) => {
  return widgetBox("Precipitation", preIn, "in", preMm, "mm", "precipitation");
};
const dewPointContainer = (tempC, tempF) => {
  return widgetBox("Dew Point", tempF, "F", tempC, "C", "temperature");
};
