import { format, parse, isToday, getHours } from "date-fns";

export const formatTime = (dateTimeStr) => {
  const date = parse(dateTimeStr, "yyyy-MM-dd HH:mm", new Date());
  const timeFormat = format(date, "h:mm a");
  return timeFormat;
};

export const formatDate = (dateStr) => {
  const date = parse(dateStr, "yyyy-MM-dd", new Date());
  return isToday(date) ? "Today" : format(date, "MMMM d, yyyy");
};

export const isCurrentHour = (hourlyTime, currentTime) => {
  const parsedHourlyTime = parse(hourlyTime, "h:mm a", new Date());
  const parsedCurrentTime = parse(currentTime, "h:mm a", new Date());

  const hourlyHour = getHours(parsedHourlyTime);
  const currentHour = getHours(parsedCurrentTime);

  return hourlyHour === currentHour;
};

export const convertTimeFormat = (timeStr) => {
  if (!timeStr) {
    console.warn("Invalid time string: ", timeStr);
    return "N/A";
  }
  try {
    const date = parse(timeStr, "hh:mm a", new Date());
    return format(date, "h:mm a");
  } catch (error) {
    console.error("Error parsing time: ", timeStr, error);
    return "N/A";
  }
};
