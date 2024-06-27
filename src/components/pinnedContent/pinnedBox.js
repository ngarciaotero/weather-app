import { createElement, createTextElement } from "../../utils/uiElements.js";
import { createToggleContainer } from "../dashboard/unitToggler.js";

export const createPinnedBox =
  (onRemove, onClick) => (locationId, city, region, tempF, tempC) => {
    const box = createElement("div");
    box.dataset.locationId = locationId;
    const location = createTextElement(`${city}, ${region}`);
    const temp = createToggleContainer(tempF, "F", tempC, "C", "temperature");
    const removeBtn = createRemoveBtn(locationId, onRemove);

    box.appendChild(temp);
    box.appendChild(location);
    box.appendChild(removeBtn);

    box.addEventListener("click", (event) => {
      if (event.target !== removeBtn && event.target !== removeBtn.firstChild) {
        onClick(locationId);
      }
    });
    return box;
  };

const createRemoveBtn = (locationId, onRemove) => {
  const removeBtn = createElement("button");
  removeBtn.innerHTML = "&#x2716;";
  removeBtn.addEventListener("click", () => onRemove(locationId));
  return removeBtn;
};
