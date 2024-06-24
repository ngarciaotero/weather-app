export const handleApiError = (error, operation) => {
  console.error(`Error during ${operation}: `, error);
  if (error.message.includes("Failed to fetch")) {
    throw new Error(
      `Network error while trying to ${operation}. Please check your internet connection.`
    );
  } else if (error.message.includes("HTTP error")) {
    throw new Error(
      `Server error while trying to ${operation}. The requested data may not be available.`
    );
  } else {
    throw new Error(`Failed to ${operation}. Try again.`);
  }
};

export const fetchApi = async (url, operation) => {
  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    handleApiError(error, operation);
  }
};
