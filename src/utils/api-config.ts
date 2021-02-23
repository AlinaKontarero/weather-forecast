export const searchLocations = (query: string): string =>
  `/search/?query=${query}`;

export const getLocationWeather = (woeid: number): string => `/${woeid}`;
