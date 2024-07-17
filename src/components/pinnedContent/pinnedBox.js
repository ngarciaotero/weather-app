import { createElement, createTextElement } from "../../utils/uiElements.js";
import { createToggleContainer } from "../../utils/unitToggler.js";
import { createSkeletonText } from "../../utils/skeletonHelper.js";

export const createPinnedBox =
  (onRemove, onClick) =>
  (url, city, region, tempF, tempC, isLoading = false) => {
    const box = createElement("div", "pin-box");
    box.dataset.locationUrl = url;

    if (isLoading) {
      box.classList.add("skeleton");
      const skeletonTemp = createSkeletonText("25%", "25px");
      const skeletonLocation = createSkeletonText("75%", "25px");

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
    const removeBtn = createRemoveBtn(url, onRemove);

    temp.classList.add("pin-temp");
    box.appendChild(temp);
    box.appendChild(location);
    box.appendChild(removeBtn);

    box.addEventListener("click", (event) => {
      if (event.target !== removeBtn && event.target !== removeBtn.firstChild) {
        onClick(url);
      }
    });
    return box;
  };

const createRemoveBtn = (locationUrl, onRemove) => {
  const removeBtn = createElement("button", "close-button");
  removeBtn.innerHTML = "&#10005";
  removeBtn.addEventListener("click", () => onRemove(locationUrl));
  return removeBtn;
};
