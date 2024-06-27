import { getForecastData } from "../../api/weatherApi.js";
import { quickWeather } from "./quickWeather.js";
import { windWeather } from "./windWeather.js";
import { moistureWeather } from "./moistureWeather.js";
import { airWeather } from "./airWeather.js";
import { hourlyForecast } from "./hourlyForecast.js";
import { unitTogglePreferences } from "./unitPreferences.js";
import { createPinButton } from "../pinnedContent/pinButton.js";
import { onPinClick } from "../pinnedContent/pinnedLocationsManager.js";
import { createElement } from "../../utils/uiElements.js";

export const displaySelectLocation = async (location) => {
  clearDashboard();
  const weatherDashboard = document.querySelector(".weather-dashboard");
  const currentLocationData = await getForecastData(location.lat, location.lon);
  const dashboard = await createDashboard(location, currentLocationData);
  weatherDashboard.appendChild(dashboard);
};

const createDashboard = async (locationData, currentLocationData) => {
  const weatherDashboard = createElement("div");
  const createPinBtn = createPinButton(onPinClick);
  const pinButton = createPinBtn(locationData, currentLocationData);
  const quickContainer = quickWeather(currentLocationData);
  const windContainer = windWeather(currentLocationData);
  const moistureContainer = moistureWeather(currentLocationData);
  const airContainer = airWeather(currentLocationData);
  const currentHourlyContainer = hourlyForecast(
    currentLocationData.forecast[0]
  );
  const secondHourlyContainer = hourlyForecast(currentLocationData.forecast[1]);
  const thirdHourlyContainer = hourlyForecast(currentLocationData.forecast[2]);
  const preferenceContainer = unitTogglePreferences();

  weatherDashboard.appendChild(pinButton);
  weatherDashboard.appendChild(quickContainer);
  weatherDashboard.appendChild(preferenceContainer);
  weatherDashboard.appendChild(windContainer);
  weatherDashboard.appendChild(moistureContainer);
  weatherDashboard.appendChild(airContainer);
  weatherDashboard.appendChild(currentHourlyContainer);
  weatherDashboard.appendChild(secondHourlyContainer);
  weatherDashboard.appendChild(thirdHourlyContainer);
  return weatherDashboard;
};

const clearDashboard = () => {
  const weatherDashboard = document.querySelector(".weather-dashboard");
  weatherDashboard.innerHTML = "";
};
