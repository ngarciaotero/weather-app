import { getForecastData } from "../../api/weatherApi.js";
import { quickWeather } from "./quickContent/quickWeather.js";
import { windWeather } from "./allConditionsContent/windWeather.js";
import { moistureWeather } from "./allConditionsContent/moistureWeather.js";
import { airWeather } from "./allConditionsContent/airWeather.js";
import { hourlyForecast } from "./hourlyContent/hourlyForecast.js";
import { unitTogglePreferences } from "./preferenceContent/unitPreferences.js";
import { createPinButton } from "../pinnedContent/pinButton.js";
import { onPinClick } from "../pinnedContent/pinnedLocationsManager.js";
import { createElement } from "../../utils/uiElements.js";
import { createSkeletonElement } from "../../utils/skeletonHelper.js";
import { sunWeather } from "./allConditionsContent/sunWeather.js";

export const displaySelectLocation = async (location) => {
  clearDashboard();
  const weatherDashboard = document.querySelector(".weather-dashboard");

  const loadingDashboard = createDashboard(location, null, true);
  weatherDashboard.appendChild(loadingDashboard);

  try {
    const currentLocationData = await getForecastData(location.url);
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
  const weatherDashboard = createElement("div", "inner-dashboard");
  const allConditions = createElement("div", "all-conditions");
  const pinButton = isLoading
    ? createSkeletonElement("skeleton-button")
    : createPinButton(onPinClick)(locationData || {}, currentLocationData);
  const quickContainer = quickWeather(isLoading ? null : currentLocationData);
  const windContainer = windWeather(isLoading ? null : currentLocationData);
  const moistureContainer = moistureWeather(
    isLoading ? null : currentLocationData
  );
  const airContainer = airWeather(isLoading ? null : currentLocationData);
  const sunContainer = sunWeather(isLoading ? null : currentLocationData);
  const hourlyContainers = isLoading
    ? Array(3)
        .fill()
        .map(() => hourlyForecast(null))
    : [
        hourlyForecast(
          currentLocationData.forecast[0],
          currentLocationData.location.localTime
        ),
        hourlyForecast(currentLocationData.forecast[1], null),
        hourlyForecast(currentLocationData.forecast[2], null),
      ];
  const preferenceContainer = unitTogglePreferences();

  quickContainer.appendChild(pinButton);
  weatherDashboard.appendChild(quickContainer);
  weatherDashboard.appendChild(preferenceContainer);
  allConditions.appendChild(windContainer);
  allConditions.appendChild(moistureContainer);
  allConditions.appendChild(airContainer);
  allConditions.appendChild(sunContainer);
  weatherDashboard.appendChild(allConditions);
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
