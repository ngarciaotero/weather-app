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
import { createSkeletonElement } from "../../utils/skeletonHelper.js";

export const displaySelectLocation = async (location) => {
  clearDashboard();
  const weatherDashboard = document.querySelector(".weather-dashboard");

  const loadingDashboard = createDashboard(location, null, true);
  weatherDashboard.appendChild(loadingDashboard);

  try {
    const currentLocationData = await getForecastData(
      location.lat,
      location.lon
    );
    clearDashboard();
    const dashboard = createDashboard(location, currentLocationData, false);
    weatherDashboard.appendChild(dashboard);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    weatherDashboard.innerHTML =
      "<p>Error loading weather data. Please try again.";
  }
};

const createDashboard = (locationData, currentLocationData, isLoading) => {
  const weatherDashboard = createElement("div");

  const pinButton = isLoading
    ? createSkeletonElement("skeleton-button")
    : createPinButton(onPinClick)(locationData || {}, currentLocationData);
  const quickContainer = quickWeather(isLoading ? null : currentLocationData);
  const windContainer = windWeather(isLoading ? null : currentLocationData);
  const moistureContainer = moistureWeather(
    isLoading ? null : currentLocationData
  );
  const airContainer = airWeather(isLoading ? null : currentLocationData);
  const hourlyContainers = isLoading
    ? Array(3)
        .fill()
        .map(() => hourlyForecast(null))
    : [
        hourlyForecast(currentLocationData.forecast[0]),
        hourlyForecast(currentLocationData.forecast[1]),
        hourlyForecast(currentLocationData.forecast[2]),
      ];
  const preferenceContainer = unitTogglePreferences();

  weatherDashboard.appendChild(pinButton);
  weatherDashboard.appendChild(quickContainer);
  weatherDashboard.appendChild(preferenceContainer);
  weatherDashboard.appendChild(windContainer);
  weatherDashboard.appendChild(moistureContainer);
  weatherDashboard.appendChild(airContainer);
  hourlyContainers.forEach((hourContainer) =>
    weatherDashboard.appendChild(hourContainer)
  );
  return weatherDashboard;
};

const clearDashboard = () => {
  const weatherDashboard = document.querySelector(".weather-dashboard");
  weatherDashboard.innerHTML = "";
};

export const renderDashboardSkeleton = () => {
  clearDashboard();
  const weatherDashboard = document.querySelector(".weather-dashboard");
  if (!weatherDashboard) {
    console.error("Weather dashboard element not found");
    return;
  }
  const skeletonDashboard = createDashboard(null, null, true);
  weatherDashboard.appendChild(skeletonDashboard);
};
