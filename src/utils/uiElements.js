export const createElement = (tag, className = "") => {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);
  return element;
};

export const createTextElement = (text, tag = "div", className = "") => {
  const element = document.createElement(tag, className);
  element.textContent = text;
  return element;
};

export const createImageElement = (src, className = "") => {
  const img = createElement("img", className);
  img.src = src;
  return img;
};
