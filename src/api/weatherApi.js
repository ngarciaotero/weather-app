import config from "../../config.production.js";
import { fetchApi } from "../utils/apiHelpers.js";

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
