import "./style.css";
import { createSearchComponent } from "./components/search/search.js";
import {
  loadPinnedLocations,
  renderPinnedSkeletons,
} from "./components/pinnedContent/pinnedLocationsManager.js";
import {
  displaySelectLocation,
  renderDashboardSkeleton,
} from "./components/dashboard/dashboard.js";
import { createWeatherInitializer } from "./api/weatherInitializer.js";
import { createGeolocation } from "./api/geolocation.js";
import { createAttributionsModal } from "./components/modal/attributions.js";

const createApp = (
  searchComponent,
  pinnedLocationsManager,
  weatherInitializer
) => ({
  initialize: async () => {
    searchComponent.create();
    pinnedLocationsManager.renderSkeletons();
    weatherInitializer.renderSkeleton();

    try {
      await Promise.all([
        pinnedLocationsManager.load(),
        weatherInitializer.loadInitialWeather(),
      ]);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  },
});

const geolocation = createGeolocation();
const weatherInitializer = createWeatherInitializer(
  geolocation,
  displaySelectLocation
);

createAttributionsModal();

const app = createApp(
  { create: createSearchComponent },
  {
    load: loadPinnedLocations,
    renderSkeletons: renderPinnedSkeletons,
  },
  {
    loadInitialWeather: weatherInitializer.loadInitialWeather,
    renderSkeleton: renderDashboardSkeleton,
  }
);

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => app.initialize());
} else {
  app.initialize();
}
