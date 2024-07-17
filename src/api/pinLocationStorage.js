export const getPinnedLocations = () => {
  return JSON.parse(localStorage.getItem("pinnedLocations")) || [];
};

const savePinnedLocations = (locations) => {
  localStorage.setItem("pinnedLocations", JSON.stringify(locations));
};

export const isLocationPinned = (url) => {
  const pinnedLocations = getPinnedLocations();
  return pinnedLocations.some((location) => location.url === url);
};

export const addLocation = (location) => {
  const pinnedLocations = getPinnedLocations();
  if (!isLocationPinned(location.url)) {
    pinnedLocations.push({
      url: location.url,
    });
    savePinnedLocations(pinnedLocations);
  }
};

export const removeLocation = (url) => {
  const pinnedLocations = getPinnedLocations();
  const updatedLocations = pinnedLocations.filter(
    (location) => location.url !== url
  );
  savePinnedLocations(updatedLocations);
};

export const initializeDefaultLocations = () => {
  if (!localStorage.getItem("visited")) {
    const defaultLocations = [
      {
        url: "new-york-new-york-united-states-of-america",
      },
      {
        url: "los-angeles-california-united-states-of-america",
      },
      {
        url: "portland-oregon-united-states-of-america",
      },
      {
        url: "boulder-colorado-united-states-of-america",
      },
      {
        url: "cambridge-massachusetts-united-states-of-america",
      },
    ];
    savePinnedLocations(defaultLocations);
    localStorage.setItem("visited", "true");
  }
};
