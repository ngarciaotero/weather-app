export const createWeatherInitializer = (
  geolocation,
  displaySelectLocation
) => {
  const loadFallbackWeather = () => {
    const newYorkLocation = { id: 5128581, lat: 40.7128, lon: -74.006 };
    try {
      displaySelectLocation(newYorkLocation);
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
        displaySelectLocation({
          id: "currentUserLocation",
          lat: location.lat,
          lon: location.lon,
        });
      } catch (error) {
        console.error("Failed to load weather for current location: ", error);
        loadFallbackWeather();
      }
    },
  };
};
