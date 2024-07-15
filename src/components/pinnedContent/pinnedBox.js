import { createElement, createTextElement } from "../../utils/uiElements.js";
import { createToggleContainer } from "../dashboard/unitToggler.js";
import { createSkeletonText } from "../../utils/skeletonHelper.js";

export const createPinnedBox =
  (onRemove, onClick) =>
  (locationId, city, region, tempF, tempC, isLoading = false) => {
    const box = createElement("div");
    box.dataset.locationId = locationId;

    if (isLoading) {
      box.classList.add("skeleton");
      const skeletonTemp = createSkeletonText();
      const skeletonLocation = createSkeletonText();

      box.appendChild(skeletonTemp);
      box.appendChild(skeletonLocation);

      return box;
    }

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
