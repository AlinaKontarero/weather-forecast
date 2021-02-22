import * as React from "react";
import styled from "styled-components";
import { DayForecast } from "../types";

const ForecastCard = styled.div`
  display: grid;
  grid-template-rows: repeat(1fr);
  grid-gap: 10px;
  border: 2px solid #38a8a9;
  border-radius: 10px;
  max-width: 140px;
  background: white;
  justify-items: start;
  padding: 15px;
  @media (max-width: 280px) {
    min-width: 220px !important;
  };
  @media (max-width: 640px) {
    min-width: 268px;
    x-overflow: hidden;
  };
  @media (max-width: 768px) {
    min-width: 268px;
  };

`;

interface Props {
  forecast: DayForecast;
}

const WeatherComponent = (props: Props) => {
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
