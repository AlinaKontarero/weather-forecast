import * as React from "react";
import "../styles/App.css";
import CitySearch from "./CitySearch";
import WeatherContainer from "./WeatherContainer";
import { DayForecast } from "../types";
import ForecastLayout from "./ForecastsLayout";
import Footer from "./Footer";

const App = () => {
  const forecast: DayForecast = {
    id: 25,
    weather_state_name: "Rainy",
    weather_state_abbr: "RN",
    wind_direction_compass: "454654564",
    created: "454654564",
    applicable_date: "454654564",
    min_temp: 25,
    max_temp: 25,
    the_temp: 25,
    wind_speed: 25,
    wind_direction: 25,
    air_pressure: 25,
    humidity: 25,
    visibility: 25,
    predictability: 25,
  };
  return (
    // <AppWrapper>

    
    <div className="App">
      <CitySearch />
      <ForecastLayout>
        <WeatherContainer forecast={forecast} />
        <WeatherContainer forecast={forecast} />
        <WeatherContainer forecast={forecast} />
        <WeatherContainer forecast={forecast} />
      </ForecastLayout>
      <Footer />
    </div>
    // </AppWrapper>
  );
};

export default App;
