import { createElement } from "./uiElements.js";

export const createSkeletonElement = (className = "") => {
  const element = createElement("div", `skeleton ${className}`);
  element.setAttribute("aria-hidden", "true");
  return element;
};

export const createSkeletonText = (width = "100%", height = "1em") => {
  const skeleton = createSkeletonElement("text");
  skeleton.style.width = width;
  skeleton.style.height = height;
  return skeleton;
};

export const createSkeletonWidget = () => {
  const widget = createElement("div", "widget-box skeleton");
  widget.appendChild(createSkeletonElement("skeleton-title"));
  widget.appendChild(createSkeletonElement("skeleton-value"));
  return widget;
};

export const createSkeletonHourlyBoxes = () => {
  const hourlyContainer = createElement("div", "hourly-boxes skeleton");
  for (let i = 0; i < 24; i++) {
    const box = createSkeletonElement("hourly-box");
    box.appendChild(createSkeletonText("40px", "1em"));
    box.appendChild(createSkeletonText("40px", "40px"));
    box.appendChild(createSkeletonText("30px", "1em"));
    hourlyContainer.appendChild(box);
  }
  return hourlyContainer;
};

export const weatherComponentWrapper = (componentFn, componentName) => {
  return (weatherData) => {
    const container = createElement("div", componentName);

    if (!weatherData) {
      const skeletonCount = getSkeletonCount(componentName);
      for (let i = 0; i < skeletonCount; i++) {
        container.appendChild(createSkeletonWidget());
      }
      return container;
    }
    return componentFn(weatherData);
  };
};

const skeletonCounts = {
  "wind-weather": 3,
  "moisture-weather": 3,
  "air-weather": 2,
  "hourly-forecast": 24,
};

const defaultSkeletonCount = 1;

const getSkeletonCount = (componentName) => {
  return skeletonCounts[componentName] || defaultSkeletonCount;
};
