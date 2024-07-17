import { searchFor } from "../api/weatherApi.js";

export const createWeatherInitializer = (
  geolocation,
  displaySelectLocation
) => {
  const loadFallbackWeather = async () => {
    try {
      const searchResults = await searchFor("New York");
      if (searchResults.length > 0) {
        await displaySelectLocation(searchResults[0]);
      } else {
        throw new Error("No results found for New York");
      }
    } catch (fallbackError) {
      console.error(
        "Failed to load fallback weather for New York: ",
        fallbackError
      );
    }
  };

  return {
    loadInitialWeather: async () => {
      try {
        const location = await geolocation.getUserLocation();
        const searchResults = await searchFor(
          `${location.lat},${location.lon}`
        );
        if (searchResults.length > 0) {
          await displaySelectLocation(searchResults[0]);
        } else {
          throw new Error("No location found for the given coordinates");
        }
      } catch (error) {
        console.error("Failed to load weather for current location: ", error);
        await loadFallbackWeather();
      }
    },
  };
};
