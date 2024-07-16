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

const onPinnedLocationClick = async (locationId) => {
  const pinnedLocations = getPinnedLocations();
  const location = pinnedLocations.find((loc) => loc.id === locationId);
  if (location) {
    const locationObject = {
      id: location.id,
      lat: location.lat,
      lon: location.lon,
    };
    await displaySelectLocation(locationObject);
  } else {
    console.error("Pinned location not found");
  }
};

export const onPinClick = (locationData, weatherData) => {
  if (isLocationPinned(locationData.id)) return;

  const { id: locationId, lat: latitude, lon: longitude } = locationData;
  const { name: city, region } = weatherData.location;
  const { tempF, tempC } = weatherData.current;

  addLocation({ id: locationId, lat: latitude, lon: longitude });
  const pinBox = createPinnedBox(removePinnedLocation, onPinnedLocationClick)(
    locationId,
    city,
    region,
    tempF,
    tempC
  );
  pinnedContainer.appendChild(pinBox);
};

const removePinnedLocation = (locationId) => {
  removeLocation(locationId);
  const boxElement = pinnedContainer.querySelector(
    `[data-location-id="${locationId}"]`
  );
  if (boxElement) boxElement.remove();
};

export const createPinBtn = createPinButton(onPinClick);

export const loadPinnedLocations = async () => {
  const pinnedLocations = getPinnedLocations();

  for (const location of pinnedLocations) {
    try {
      const currentLocationData = await getForecastData(
        location.lat,
        location.lon
      );

      const skeletonBox = pinnedContainer.querySelector(
        `[data-location-id="${location.id}"]`
      );
      if (skeletonBox) skeletonBox.remove();

      const pinBox = createPinnedBox(
        removePinnedLocation,
        onPinnedLocationClick
      )(
        location.id,
        currentLocationData.location.name,
        currentLocationData.location.region,
        currentLocationData.current.tempF,
        currentLocationData.current.tempC
      );
      pinnedContainer.appendChild(pinBox);
    } catch (error) {
      console.error(`Failed to load data for ${location.name}: `, error);
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
    )(location.id, "", "", "", "", true);
    pinnedContainer.appendChild(skeletonBox);
  });
};
