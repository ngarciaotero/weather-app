import { searchFor } from "../../api/weatherApi.js";
import { updateDropdown } from "./search.js";

export const handleSearchInput = async (event) => {
  const searchValue = event.target.value;
  const dropdownContent = document.querySelector(".dropdown-search-content");

  if (searchValue.length < 3) {
    dropdownContent.innerHTML = "";
    return;
  }
  try {
    const searchResults = await searchFor(searchValue);
    updateDropdown(searchResults, dropdownContent);
  } catch (error) {
    console.error("Error fetching search results: ", error);
  }
};
