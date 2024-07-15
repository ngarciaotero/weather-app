export const createGeolocation = () => ({
  getUserLocation: () =>
    new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            });
          },
          (error) => {
            console.error("Error getting location: ", error);
            reject(error);
          }
        );
      } else {
        reject(new Error("Geolocation is not supported."));
      }
    }),
});
