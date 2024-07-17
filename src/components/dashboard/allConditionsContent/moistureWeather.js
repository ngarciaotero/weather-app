import {
  widgetBox,
  singleValueWidgetBox,
} from "../../../utils/createWidgetBox.js";
import { createElement } from "../../../utils/uiElements.js";
import { weatherComponentWrapper } from "../../../utils/skeletonHelper.js";

const moistureWeatherComponent = (weatherData) => {
  const moistureContainer = createElement("div", "moisture-weather");

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

export const moistureWeather = weatherComponentWrapper(
  moistureWeatherComponent,
  "moisture-weather"
);
