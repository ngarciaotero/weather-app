import config from "../../config.production.js";

const handleApiError = (error, operation) => {
  console.error(`Error during ${operation}: `, error);
  if (error.message.includes("Failed to fetch")) {
    throw new Error(
      `Network error while trying to ${operation}. Please check your internet connection.`
    );
  } else if (error.message.includes("HTTP error")) {
    throw new Error(
      `Server error while trying to ${operation}. The requested data may not be available.`
    );
  } else {
    throw new Error(`Failed to ${operation}. Try again.`);
  }
};

const fetchApi = async (url, operation) => {
  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    handleApiError(error, operation);
  }
};

export const getCurrentData = (desiredLocation) =>
  fetchApi(
    `https://api.weatherapi.com/v1/current.json?key=${config.API_KEY}&q=${desiredLocation}`,
    "fetch current weather data"
  );

export const getForecastData = (desiredLocation, days = 3) =>
  fetchApi(
    `https://api.weatherapi.com/v1/forecast.json?key=${config.API_KEY}&q=${desiredLocation}&days=${days}`,
    "fetch forecast data"
  );

export const searchFor = (desiredLocationString) =>
  fetchApi(
    `https://api.weatherapi.com/v1/search.json?key=${config.API_KEY}&q=${desiredLocationString}`,
    "search for locations"
  );
