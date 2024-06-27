import config from "../../config.production.js";
import { fetchApi } from "../utils/apiHelpers.js";

export const getForecastData = async (lat, lon, days = 3) => {
  const rawData = await fetchApi(
    `https://api.weatherapi.com/v1/forecast.json?key=${config.API_KEY}&q=${lat},${lon}&days=${days}&aqi=yes`,
    "fetch forecast data"
  );
  return processForecastData(rawData);
};

export const searchFor = async (desiredLocationString) => {
  const searchData = await fetchApi(
    `https://api.weatherapi.com/v1/search.json?key=${config.API_KEY}&q=${desiredLocationString}`,
    "search for locations"
  );
  return processSearchResults(searchData);
};

const processForecastData = (rawData) => {
  const currentWeather = {
    aqi: rawData.current.air_quality["us-epa-index"],
    conditionTxt: rawData.current.condition.text,
    conditionIcon: rawData.current.condition.icon,
    isDay: rawData.current.is_day,
    tempC: rawData.current.temp_c,
    tempF: rawData.current.temp_f,
    feelsLikeC: rawData.current.feelslike_c,
    feelsLikeF: rawData.current.feelslike_f,
    dewPointC: rawData.current.dewpoint_c,
    dewPointF: rawData.current.dewpoint_f,
    humidity: rawData.current.humidity,
    uvIndex: rawData.current.uv,
    lastUpdate: rawData.current.last_updated,
    precipitation: {
      in: rawData.current.precip_in,
      mm: rawData.current.precip_mm,
    },
    pressure: {
      in: rawData.current.pressure_in,
      mb: rawData.current.pressure_mb,
    },
    wind: {
      direction: rawData.current.wind_dir,
      kph: rawData.current.wind_kph,
      mph: rawData.current.wind_mph,
      chillC: rawData.current.windchill_c,
      chillF: rawData.current.windchill_f,
    },
    gust: {
      kph: rawData.current.gust_kph,
      mph: rawData.current.gust_mph,
    },
  };

  const forecastWeather = rawData.forecast.forecastday.map((dayData) => ({
    date: dayData.date,
    sunrise: dayData.astro.sunrise,
    sunset: dayData.astro.sunset,
    moonrise: dayData.astro.moonrise,
    moonset: dayData.astro.moonset,
    moonPhase: dayData.astro.moon_phase,
    moonUp: dayData.astro.is_moon_up,
    maxTempC: dayData.day.maxtemp_c,
    maxTempF: dayData.day.maxtemp_f,
    minTempC: dayData.day.mintemp_c,
    minTempF: dayData.day.mintemp_f,
    avgTempC: dayData.day.avgtemp_c,
    avgTempF: dayData.day.avgtemp_f,
    conditionTxt: dayData.day.condition.text,
    conditionIcon: dayData.day.condition.icon,
    maxwind: {
      kph: dayData.day.maxwind_kph,
      mph: dayData.day.maxwind_mph,
    },
    totalprecip: {
      mm: dayData.day.totalprecip_mm,
      in: dayData.day.totalprecip_in,
    },
    avghumidity: dayData.day.avghumidity,
    chanceOfRain: dayData.day.daily_chance_of_rain,
    chanceOfSnow: dayData.day.daily_chance_of_snow,
    uv: dayData.day.uv,
    hourlyForecast: dayData.hour.map((hour) => ({
      time: hour.time,
      tempC: hour.temp_c,
      tempF: hour.temp_f,
      conditionTxt: hour.condition.text,
      conditionIcon: hour.condition.icon,
      wind: {
        kph: hour.wind_kph,
        mph: hour.wind_mph,
        direction: hour.wind_dir,
      },
      humidity: hour.humidity,
      feelsLikeC: hour.feelslike_c,
      feelsLikeF: hour.feelslike_f,
      chanceOfRain: hour.daily_chance_of_rain,
      chanceOfSnow: hour.daily_chance_of_snow,
    })),
  }));
  return {
    location: {
      name: rawData.location.name,
      region: rawData.location.region,
      country: rawData.location.country,
      time: rawData.location.localtime,
      lat: rawData.location.lat,
      lon: rawData.location.lon,
    },
    current: currentWeather,
    forecast: forecastWeather,
  };
};

const processSearchResults = (searchData) => {
  return searchData.map((location) => ({
    id: location.id,
    lat: location.lat,
    lon: location.lon,
    name: location.name,
    region: location.region,
    country: location.country,
  }));
};
