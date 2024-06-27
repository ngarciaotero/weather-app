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

const searchDropdown = () => {
  const dropdownContainer = document.createElement("div");
  dropdownContainer.classList.add("dropdown-search-content");
  return dropdownContainer;
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
