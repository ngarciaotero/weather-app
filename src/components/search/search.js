import { clearSearch, handleSearchInput } from "./handleSearchInput.js";
import { displaySelectLocation } from "../dashboard/dashboard.js";
import { createElement, createTextElement } from "../../utils/uiElements.js";
import { createSkeletonText } from "../../utils/skeletonHelper.js";

let inputElement;

export const createSearchComponent = () => {
  const searchContainer = document.querySelector(".search-container");
  inputElement = searchInput();
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

export const updateDropdown = (results, dropdownElement, isLoading = false) => {
  dropdownElement.innerHTML = "";

  if (isLoading) {
    const skeletonItems = Array(3)
      .fill()
      .map(() => {
        const skeletonItem = createSkeletonText();
        return skeletonItem;
      });
    skeletonItems.forEach((item) => dropdownElement.appendChild(item));
    return;
  }

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
    li.addEventListener("click", () => {
      displaySelectLocation(result);
      clearSearch();
    });
    ul.appendChild(li);
  });
  return ul;
};

export const clearSearchInput = () => {
  if (inputElement) {
    inputElement.value = "";
  }
};
