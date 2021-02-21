const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const getDay = (day: string): string => {
  const date = new Date(day);
  return weekdays[date.getDay()];
};
