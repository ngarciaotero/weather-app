import config from "../../config.production.js";
import { fetchApi } from "../utils/apiHelpers.js";

export const getCurrentData = async (desiredLocation) => {
  const rawData = await fetchApi(
    `https://api.weatherapi.com/v1/current.json?key=${config.API_KEY}&q=${desiredLocation}`,
    "fetch current weather data"
  );
  return processCurrentData(rawData);
};

export const getForecastData = async (desiredLocation, days = 3) => {
  const rawData = await fetchApi(
    `https://api.weatherapi.com/v1/forecast.json?key=${config.API_KEY}&q=${desiredLocation}&days=${days}`,
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

const processCurrentData = (rawData) => {
  return {
    location: {
      name: rawData.location.name,
      region: rawData.location.region,
      country: rawData.location.country,
    },
    condition: {
      text: rawData.current.condition.text,
      icon: rawData.current.condition.icon,
      isDay: rawData.current.is_day,
    },
    temperature: {
      celsius: rawData.current.temp_c,
      fahrenheit: rawData.current.temp_f,
    },
    feelsLike: {
      celsius: rawData.current.feelslike_c,
      fahrenheit: rawData.current.feelslike_f,
    },
    dewPoint: {
      celsius: rawData.current.dewpoint_c,
      fahrenheit: rawData.current.dewpoint_f,
    },
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
      gust: {
        kph: rawData.current.gust_kph,
        mph: rawData.current.gust_mph,
      },
      chill: {
        celsius: rawData.current.windchill_c,
        fahrenheit: rawData.current.windchill_f,
      },
    },
    humidity: rawData.current.humidity,
    uvIndex: rawData.current.uv,
    lastUpdate: rawData.current.last_updated,
  };
};

const processForecastData = (rawData) => {
  return {
    location: {
      name: rawData.location.name,
      region: rawData.location.region,
      country: rawData.location.country,
      time: rawData.location.localtime,
    },
    current: processCurrentData(rawData),
    forecast: rawData.forecast.forecastday.map((dayData) => ({
      date: dayData.date,
      astronomy: {
        sunrise: dayData.astro.sunrise,
        sunset: dayData.astro.sunset,
        moonrise: dayData.astro.moonrise,
        moonset: dayData.astro.moonset,
        moonPhase: dayData.astro.moon_phase,
        moonUp: dayData.astro.is_moon_up,
      },
      dailySummary: {
        maxtemp: {
          celsius: dayData.day.maxtemp_c,
          fahrenheit: dayData.day.maxtemp_f,
        },
        mintemp: {
          celsius: dayData.day.mintemp_c,
          fahrenheit: dayData.day.mintemp_f,
        },
        avgtemp: {
          celsius: dayData.day.avgtemp_c,
          fahrenheit: dayData.day.avgtemp_f,
        },
        condition: {
          text: dayData.day.condition.text,
          icon: dayData.day.condition.icon,
        },
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
      },
      hourlyForecast: dayData.hour.map((hour) => ({
        time: hour.time,
        temp: {
          celsius: hour.temp_c,
          fahrenheit: hour.temp_f,
        },
        condition: {
          text: hour.condition.text,
          icon: hour.condition.icon,
        },
        wind: {
          kph: hour.wind_kph,
          mph: hour.wind_mph,
          direction: hour.wind_dir,
        },
        humidity: hour.humidity,
        feelsLike: {
          celsius: hour.feelslike_c,
          fahrenheit: hour.feelslike_f,
        },
        chanceOfRain: hour.daily_chance_of_rain,
        chanceOfSnow: hour.daily_chance_of_snow,
      })),
    })),
  };
};

const processSearchResults = (searchData) => {
  return searchData.map((location) => ({
    name: location.name,
    region: location.region,
    country: location.country,
  }));
};
