import * as React from "react";
import styled from "styled-components";
import { DayForecast } from "../types";
import { numberFormatter } from "../utils/numberFormatter";

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
  text-align: start;
  font-size: 14px;
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
  .description {
    color: #414449;
    font-style: italic;
  }
`;

interface Props {
  forecast: DayForecast;
}

const DayForecastCard = (props: Props) => {
  const maxT = numberFormatter(props.forecast.max_temp)
  const minT = numberFormatter(props.forecast.min_temp)
  const windSpeed = numberFormatter(props.forecast.wind_speed, 1)
  return (
    <ForecastCard>
      <div>{props.forecast.applicable_date}</div>
      <div className='description'>{props.forecast.weather_state_name}</div>
      <div>Max: {maxT}°C</div>
      <div>Min: {minT}°C</div>
      <div>Wind speed: {windSpeed} mph</div>
    </ForecastCard>
  );
};

export default DayForecastCard;
