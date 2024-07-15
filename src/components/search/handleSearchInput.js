import { searchFor } from "../../api/weatherApi.js";
import { updateDropdown } from "./search.js";
import { searchDebounce } from "../../utils/debounce.js";
import { clearSearchInput } from "./search.js";

export const handleSearchInput = (event) => {
  const searchValue = event.target.value;
  const dropdownContent = document.querySelector(".dropdown-search-content");
  debouncedSearch(searchValue, dropdownContent);
};

const debouncedSearch = searchDebounce(async (searchValue, dropdownContent) => {
  if (searchValue.length < 3) {
    dropdownContent.style.display = "none";
    return;
  }
  dropdownContent.style.display = "block";
  updateDropdown([], dropdownContent, true);

  try {
    const searchResults = await searchFor(searchValue);
    updateDropdown(searchResults, dropdownContent);
  } catch (error) {
    console.error("Error fetching search results: ", error);
    updateDropdown([], dropdownContent);
  }
}, 500);

export const clearSearch = () => {
  clearSearchInput();
  const dropdownContent = document.querySelector(".dropdown-search-content");
  dropdownContent.style.display = "none";
};
