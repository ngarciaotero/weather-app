import { createElement, createTextElement } from "../../utils/uiElements.js";
import { createToggleContainer } from "../dashboard/unitToggler.js";
import { createSkeletonText } from "../../utils/skeletonHelper.js";

export const createPinnedBox =
  (onRemove, onClick) =>
  (locationId, city, region, tempF, tempC, isLoading = false) => {
    const box = createElement("div", "pin-box");
    box.dataset.locationId = locationId;

    if (isLoading) {
      box.classList.add("skeleton");
      const skeletonTemp = createSkeletonText();
      const skeletonLocation = createSkeletonText();

      box.appendChild(skeletonTemp);
      box.appendChild(skeletonLocation);

      return box;
    }

    const location = createTextElement(
      `${city}, ${region}`,
      "div",
      "pin-location"
    );
    const temp = createToggleContainer(tempF, "F", tempC, "C", "temperature");
    const removeBtn = createRemoveBtn(locationId, onRemove);

    temp.classList.add("pin-temp");
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
  const removeBtn = createElement("button", "close-button");
  removeBtn.innerHTML = "&#10005";
  removeBtn.addEventListener("click", () => onRemove(locationId));
  return removeBtn;
};
