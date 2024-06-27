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

const pinnedContainer = document.querySelector(".pinned-locations");

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
  initializeDefaultLocations();

  for (const location of pinnedLocations) {
    try {
      const currentLocationData = await getForecastData(
        location.lat,
        location.lon
      );
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
