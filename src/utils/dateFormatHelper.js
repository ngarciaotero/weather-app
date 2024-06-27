import { format, parse, isToday } from "date-fns";

export const formatTime = (dateTimeStr) => {
  const date = parse(dateTimeStr, "yyyy-MM-dd HH:mm", new Date());
  const timeFormat = format(date, "h:mm a");
  return timeFormat;
};

export const formatDate = (dateStr) => {
  const date = parse(dateStr, "yyyy-MM-dd", new Date());
  return isToday(date) ? "Today" : format(date, "MMMM d, yyyy");
};
