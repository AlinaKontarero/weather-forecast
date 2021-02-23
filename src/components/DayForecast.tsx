import * as React from "react";
import styled from "styled-components";
import { DayForecast } from "../types";
import { dateConverter } from "../utils/dateConverter";
import { numberFormatter } from "../utils/numberFormatter";

const ForecastCard = styled.div`
  display: grid;
  grid-template-rows: repeat(1fr);
  grid-gap: 10px;
  border: 2px solid #38a8a9;
  border-radius: 10px;
  max-width: 160px;
  background: white;
  justify-items: start;
  padding: 15px;
  text-align: start;
  font-size: 16px;
  @media (max-width: 280px) {
    min-width: 220px !important;
  };
  @media (max-width: 640px) {
    min-width: 268px;
    x-overflow: hidden;
    font-size: 14px;
  };
  @media (max-width: 768px) {
    min-width: 268px;
    font-size: 14px;
  };

  .description {
    color: #414449;
    font-style: italic;
    width: 100%;
    vertical-align: center;
  }
  .forecast-icon {
    position: relative;
    max-width: 20px;
    display: inline-block;
    vertical-align: middle;
    padding-right: 4px;
  }
  
  .date {
    font-weight: bold;
  }
`;

interface Props {
  forecast: DayForecast
}

const DayForecastCard = (props: Props) => {
  const maxT = numberFormatter(props.forecast.max_temp)
  const minT = numberFormatter(props.forecast.min_temp)
  const windSpeed = numberFormatter(props.forecast.wind_speed)
  const forecastDate = dateConverter(props.forecast.applicable_date)
  return (
    <ForecastCard>
      <div className='date'>{forecastDate}</div>
      <div className='description'>
        <span> 
          <img 
            className={"forecast-icon"} 
            src={`https://www.metaweather.com/static/img/weather/${props.forecast.weather_state_abbr}.svg`} 
            alt={props.forecast.weather_state_name}
          /> {props.forecast.weather_state_name}
      </span>
      </div>
      <div>Max: {maxT}°C</div>
      <div>Min: {minT}°C</div>
      <div>Wind speed: {windSpeed} mph</div>
    </ForecastCard>
  );
};

export default DayForecastCard;
