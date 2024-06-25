export const createSearchComponent = (container) => {
  const searchContainer = document.querySelector(".search-container");
  searchContainer.appendChild(searchInput());
};

const searchInput = () => {
  const inputElement = document.createElement("input");
  inputElement.type = "search";
  inputElement.id = "location-search";
  inputElement.name = "loc-search";
  inputElement.placeholder = "Search City or Zip Code";
  return inputElement;
};
