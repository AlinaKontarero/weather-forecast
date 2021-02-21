import joinUrl from "url-join";

export const searchLocations = (query: string): string =>
  `/search/?query=${query}`;

export const getLocationWeather = (woeid: number): string => `/${woeid}`;

export const getWeatherIcon = (weatherState: string): string =>
  joinUrl("", "/static/img/weather", `${weatherState}.svg`);
