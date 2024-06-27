import { handleSearchInput } from "./handleSearchInput.js";
import { displaySelectLocation } from "../dashboard/dashboard.js";
import { createElement, createTextElement } from "../../utils/uiElements.js";

export const createSearchComponent = () => {
  const searchContainer = document.querySelector(".search-container");
  const inputElement = searchInput();
  const dropdownElement = searchDropdown();

  searchContainer.appendChild(inputElement);
  searchContainer.appendChild(dropdownElement);

  inputElement.addEventListener("input", handleSearchInput);
};

const searchInput = () => {
  const inputElement = createElement("input");
  inputElement.type = "search";
  inputElement.id = "location-search";
  inputElement.name = "loc-search";
  inputElement.placeholder = "Search City or Zip Code";
  return inputElement;
};

const searchDropdown = () => {
  return createElement("div", "dropdown-search-content");
};

export const updateDropdown = (results, dropdownElement) => {
  dropdownElement.innerHTML = "";

  if (results.length === 0) {
    dropdownElement.innerHTML = "<p>No results found</p>";
    return;
  }

  const locationOptions = displayLocationOptions(results);
  dropdownElement.appendChild(locationOptions);
};

const displayLocationOptions = (results) => {
  const ul = createElement("ul");
  results.forEach((result) => {
    const li = createTextElement(
      `${result.name}, ${result.region} (${result.country})`,
      "li"
    );
    li.addEventListener("click", () => displaySelectLocation(result));
    ul.appendChild(li);
  });
  return ul;
};
