import {
  getPinnedLocations,
  isLocationPinned,
  addLocation,
  removeLocation,
  initializeDefaultLocations,
} from "../../api/pinLocationStorage.js";
import { getForecastData } from "../../api/weatherApi.js";
import { createPinButton } from "./pinButton.js";
import { createPinnedBox } from "./pinnedBox.js";
import { displaySelectLocation } from "../dashboard/dashboard.js";
import {
  createElement,
  createImageElement,
  createTextElement,
} from "../../utils/uiElements.js";
import pinMap from "../../imgs/pin-map.png";

const pinnedContainer = document.querySelector(".pinned-locations");

const pinLocationHeader = () => {
  const header = createElement("div", "pinned-header");
  header.appendChild(createImageElement(pinMap));
  header.appendChild(
    createTextElement("Pinned Locations", "h2", "pin-txt-header")
  );
  return header;
};

pinnedContainer.appendChild(pinLocationHeader());

const onPinnedLocationClick = async (locationUrl) => {
  const pinnedLocations = getPinnedLocations();
  const location = pinnedLocations.find((loc) => loc.url === locationUrl);
  if (location) {
    await displaySelectLocation(location);
  } else {
    console.error("Pinned location not found");
  }
};

export const onPinClick = (locationData, weatherData) => {
  if (isLocationPinned(locationData.url)) return;

  addLocation(locationData);
  const pinBox = createPinnedBox(removePinnedLocation, onPinnedLocationClick)(
    locationData.url,
    weatherData.location.name,
    weatherData.location.region,
    weatherData.current.tempF,
    weatherData.current.tempC
  );
  pinnedContainer.appendChild(pinBox);
};

const removePinnedLocation = (locationUrl) => {
  removeLocation(locationUrl);
  const boxElement = pinnedContainer.querySelector(
    `[data-location-url="${locationUrl}"]`
  );
  if (boxElement) boxElement.remove();
};

export const createPinBtn = createPinButton(onPinClick);

export const loadPinnedLocations = async () => {
  const pinnedLocations = getPinnedLocations();

  for (const location of pinnedLocations) {
    try {
      const currentLocationData = await getForecastData(location.url);

      const skeletonBox = pinnedContainer.querySelector(
        `[data-location-url="${location.url}"]`
      );
      if (skeletonBox) skeletonBox.remove();

      const pinBox = createPinnedBox(
        removePinnedLocation,
        onPinnedLocationClick
      )(
        location.url,
        currentLocationData.location.name,
        currentLocationData.location.region,
        currentLocationData.current.tempF,
        currentLocationData.current.tempC
      );
      pinnedContainer.appendChild(pinBox);
    } catch (error) {
      console.error(`Failed to load data for ${location.url}: `, error);
    }
  }
};

export const renderPinnedSkeletons = () => {
  const pinnedLocations = getPinnedLocations();
  initializeDefaultLocations();

  pinnedLocations.forEach((location) => {
    const skeletonBox = createPinnedBox(
      removePinnedLocation,
      onPinnedLocationClick
    )(location.url, "", "", "", "", true);
    pinnedContainer.appendChild(skeletonBox);
  });
};
