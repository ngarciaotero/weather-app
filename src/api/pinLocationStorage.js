export const getPinnedLocations = () => {
  return JSON.parse(localStorage.getItem("pinnedLocations")) || [];
};

const savePinnedLocations = (locations) => {
  localStorage.setItem("pinnedLocations", JSON.stringify(locations));
};

export const isLocationPinned = (locationId) => {
  const pinnedLocations = getPinnedLocations();
  return pinnedLocations.some((location) => location.id === locationId);
};

export const addLocation = (location) => {
  const pinnedLocations = getPinnedLocations();
  pinnedLocations.push(location);
  savePinnedLocations(pinnedLocations);
};

export const removeLocation = (locationId) => {
  const pinnedLocations = getPinnedLocations();
  const updatedLocations = pinnedLocations.filter(
    (location) => location.id !== locationId
  );
  savePinnedLocations(updatedLocations);
};

export const initializeDefaultLocations = () => {
  if (!localStorage.getItem("visited")) {
    const defaultLocations = [
      { id: 2618724, lat: 40.71, lon: -74.01 },
      { id: 2548773, lat: 34.05, lon: -118.24 },
      { id: 2593241, lat: 42.36, lon: -71.06 },
      { id: 2564415, lat: 21.31, lon: -157.86 },
      { id: 2661755, lat: 44.26, lon: -72.58 },
    ];
    savePinnedLocations(defaultLocations);
    localStorage.setItem("visited", "true");
  }
};
