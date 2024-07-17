import {
  createElement,
  createImageElement,
  createTextElement,
} from "../../utils/uiElements.js";
import pinIcon from "../../imgs/pin.png";

export const createPinButton = (onPinClick) => (locationData, weatherData) => {
  const pinContainer = createElement("div", "pin-button");
  const pinImg = createImageElement(pinIcon, "pin-img");
  const pinTxt = createTextElement("Pin Spot");
  pinContainer.appendChild(pinImg);
  pinContainer.appendChild(pinTxt);
  pinContainer.addEventListener("click", () =>
    onPinClick(locationData, weatherData)
  );
  return pinContainer;
};
