export type Location = {
  title: string;
  location_type: LocationType;
  woeid: number;
  latt_long: string;
};

export type LocationType =
  | "City"
  | "Region"
  | "State"
  | "Province"
  | "Country"
  | "Continent";

export type DayForecast = {
  id: number;
  weather_state_name: string;
  weather_state_abbr: string;
  wind_direction_compass: string;
  created: string;
  applicable_date: string;
  min_temp: number;
  max_temp: number;
  the_temp: number;
  wind_speed: number;
  wind_direction: number;
  air_pressure: number;
  humidity: number;
  visibility: number;
  predictability: number;
};

export type Coordinates = {
  accuracy: number;
  altitude: number | null;
  altitudeAccuracy: number | null;
  heading: number | null;
  latitude: number;
  longitude: number;
  speed: number | null;
};

export type OptionalLocation = {
  title: string;
  location_type: LocationType;
  latt_long: number;
  woeid: number;
  distance: number;
};
