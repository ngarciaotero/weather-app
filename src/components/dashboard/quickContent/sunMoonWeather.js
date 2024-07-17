import {
  createElement,
  createTextElement,
  createImageElement,
} from "../../../utils/uiElements.js";
import moonriseIcon from "../../../imgs/moonrise.png";
import moonsetIcon from "../../../imgs/moonset.png";
import sunriseIcon from "../../../imgs/sunrise.png";
import sunsetIcon from "../../../imgs/sunset.png";
import { convertTimeFormat } from "../../../utils/dateFormatHelper.js";

export const sunMoonContainer = (celestialData) => {
  const container = createElement("div", "celestial-container");

  container.appendChild(createImageElement(sunriseIcon, "celestImg"));
  container.appendChild(
    createTextElement(convertTimeFormat(celestialData.sunrise))
  );
  container.appendChild(createImageElement(sunsetIcon, "celestImg"));
  container.appendChild(
    createTextElement(convertTimeFormat(celestialData.sunset))
  );
  container.appendChild(createImageElement(moonriseIcon, "celestImg"));
  container.appendChild(
    createTextElement(convertTimeFormat(celestialData.moonrise))
  );
  container.appendChild(createImageElement(moonsetIcon, "celestImg"));
  container.appendChild(
    createTextElement(convertTimeFormat(celestialData.moonset))
  );
  return container;
};
