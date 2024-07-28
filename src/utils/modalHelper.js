import { createElement } from "./uiElements";

export const createAttributionLink = (attr) => {
  const link = createElement("a");
  link.href = attr.href;
  if (attr.title) link.title = attr.title;
  link.textContent = attr.text;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  return link;
};

export const showModal = (modal) => {
  modal.style.display = "block";
};

export const hideModal = (modal) => {
  modal.style.display = "none";
};
