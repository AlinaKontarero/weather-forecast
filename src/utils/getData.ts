import joinUrl from "url-join";

// export const baseURL = process.env.REACT_APP_BASE_URL || "";
// export const apiURL = joinUrl(baseURL, "/api/location");

// export const searchLocations = (query: string): string =>
//   `/search/?query=${query}`;

// export const getLocationForecasts = (woeid: number): string => `/${woeid}`;

// export const getWeatherImage = (weatherState: string): string =>
//   joinUrl(baseURL, "/static/img/weather", `${weatherState}.svg`);

// export const getAPIFullPath = (apiURL: string, apiEndpoint: string): string =>
//   joinUrl(process.env.REACT_APP_PROXY_SERVER || "", apiURL, apiEndpoint);

// export const fetcher = (url: string): Promise<Response> =>
//   fetch(getAPIFullPath(apiURL, url), {
//     headers: { Origin: "null" },
//   }).then((r) => r.json());

// export const mapLocationToAutoComplete = (
//   locations: ForecastLocation[],
// ): AutoCompleteOptions =>
//   locations.map((location) => ({
//     label: location.title,
//     value: location.title,
//   }));
