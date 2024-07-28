import {
  createAttributionLink,
  hideModal,
  showModal,
} from "../../utils/modalHelper.js";
import { createElement, createTextElement } from "../../utils/uiElements.js";

const setupModalEvents = (modal) => {
  const attributionLinks = document.querySelector("#attributionLinks");
  if (attributionLinks) {
    attributionLinks.addEventListener("click", (event) => {
      event.preventDefault();
      modal.style.display = "block";
    });
  }

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
};

const createModalContent = (attributions) => {
  const modalContent = createElement("div", "modal-content");
  const heading = createTextElement("Image Attributions", "h3");
  modalContent.appendChild(heading);

  attributions.forEach((attr) => {
    const link = createAttributionLink(attr);
    modalContent.appendChild(link);
  });

  return modalContent;
};

const createModal = (attributions) => {
  const modal = createElement("div", "attr-modal");
  const modalContent = createModalContent(attributions);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  return modal;
};

const attributions = [
  {
    href: "https://www.flaticon.com/free-icons/route",
    title: "route icons",
    text: "Route icons created by Sir.Vector - Flaticon",
  },
  {
    href: "https://www.flaticon.com/free-icons/location",
    title: "location icons",
    text: "Location icons created by IconMarketPK - Flaticon",
  },
  {
    href: "https://www.freepik.com/icon/weather_15064705#fromView=family&page=1&position=8&uuid=3905355f-78c4-4b39-85b3-4fabe64007c6",
    text: "Icon by kawalanicon",
  },
  {
    href: "https://www.freepik.com/icon/weather_15064711#fromView=resource_detail&position=37",
    text: "Icon by kawalanicon",
  },
  {
    href: "https://www.freepik.com/icon/moon_15064635#fromView=resource_detail&position=48",
    text: "Icon by kawalanicon",
  },
  {
    href: "https://www.freepik.com/icon/moon_15064663#fromView=resource_detail&position=45",
    text: "Icon by kawalanicon",
  },
];

export const createAttributionsModal = () => {
  const modal = createModal(attributions);
  setupModalEvents(modal);
  return {
    show: () => showModal(modal),
    hide: () => hideModal(modal),
  };
};
