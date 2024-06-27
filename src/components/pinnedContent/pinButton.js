import {
  createElement,
  createImageElement,
  createTextElement,
} from "../../utils/uiElements.js";
import pinIcon from "../../imgs/pin.png";

export const createPinButton = (onPinClick) => (locationData, weatherData) => {
  const pinContainer = createElement("div");
  const pinImg = createImageElement(pinIcon, "pin-img");
  const pinTxt = createTextElement("Pin Location");
  pinContainer.appendChild(pinImg);
  pinContainer.appendChild(pinTxt);
  pinContainer.addEventListener("click", () =>
    onPinClick(locationData, weatherData)
  );
  return pinContainer;
};
