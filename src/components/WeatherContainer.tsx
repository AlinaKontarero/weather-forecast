import * as React from "react";
import styled from "styled-components";
import { DayForecast } from "../types";

const ForecastCard = styled.div`
  display: grid;
  grid-template-rows: repeat(1fr);
  grid-gap: 10px;
  border: 2px solid #38A8A9;
  border-radius: 10px;
  max-width: 140px;
  background: white;
`;

interface Props {
  forecast: DayForecast;
}

const WeatherComponent = (props: Props) => {
  const isToday =
    parseInt(props.forecast.applicable_date) == Date.now()
      ? "Today"
      : undefined;
  const isTomorrow =
    parseInt(props.forecast.applicable_date) == Date.now() + 1
      ? "Tomorrow"
      : undefined;
  return (
    <ForecastCard>
      <div>{props.forecast.applicable_date}</div>
      <div>General description: {props.forecast.weather_state_name}</div>
      <div>Max: {props.forecast.max_temp} °C</div>
      <div>Min: {props.forecast.min_temp} °C</div>
      <div>Wind speed: {props.forecast.wind_speed} mph</div>
    </ForecastCard>
  );
};

export default WeatherComponent;
//https://github.com/andrewjackson95/metaweatherUI/blob/master/src/app/search-page/search-page.component.ts
