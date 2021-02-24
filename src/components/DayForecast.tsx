import * as React from "react";
import styled from "styled-components";
import { DayForecast } from "../types";
import { dateConverter } from "../utils/dateConverter";
import { numberFormatter } from "../utils/numberFormatter";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const ForecastCard = styled.div`
  display: grid;
  grid-gap: 10px;
  border: 1px solid var(--text);
  border-radius: 10px;
  width: 160px;
  background: white;
  justify-items: center;
  padding: 15px;
  text-align: center;
  font-size: 16px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  @media (max-width: 280px) {
    min-width: 220px !important;
    .forecast-item {
      font-size: 14px !important;
    }
  }
  @media (max-width: 640px) {
    min-width: 268px;
    x-overflow: hidden;
    font-size: 14px;
    .forecast-item {
      font-size: 14px !important;
    }
  }
  @media (max-width: 768px) {
    min-width: 268px;
    font-size: 14px;
    .forecast-item {
      font-size: 14px !important;
    }
  }

  .description {
    text-transform: uppercase;
    color: var(--text);
    width: 100%;
    vertical-align: center;
  }

  .forecast-icon {
    position: relative;
    max-width: 50px;
    display: inline-block;
    vertical-align: middle;
    padding-right: 4px;
  }

  .date {
    font-weight: bold;
    color: var(--text);
  }

  .main-temp {
    font-size: 40px;
    line-height: 44px;
  }

  .forecast-details {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0px;
  }

  .forecast-item {
    display: flex;
    flex-firection: row;
    align-items: center;
    font-size: 12px;
    line-height: 12px;
  }

  .min {
    color: var(--secondary);
  }

  .max {
    color: var(--primary);
  }

  .wind {
    color: var(--text);
  }
`;

interface Props {
  forecast: DayForecast;
}

const DayForecastCard = (props: Props) => {
  const currentT = numberFormatter(props.forecast.the_temp, 0);
  const maxT = numberFormatter(props.forecast.max_temp);
  const minT = numberFormatter(props.forecast.min_temp);
  const windSpeed = numberFormatter(props.forecast.wind_speed);
  const forecastDate = dateConverter(props.forecast.applicable_date);
  return (
    <ForecastCard>
      <div className="date">{forecastDate}</div>
      <img
        className="forecast-icon"
        src={`https://www.metaweather.com/static/img/weather/${props.forecast.weather_state_abbr}.svg`}
        alt={props.forecast.weather_state_name}
      />
      <div className="main-temp">{currentT}°C</div>
      <div className="description">{props.forecast.weather_state_name}</div>
      <div className="forecast-details">
        <div className="forecast-item min">
          <span>Min</span> <ArrowDropDownIcon fontSize="small" />
        </div>
        <div className="forecast-item max">
          Max <ArrowDropUpIcon fontSize="small" />
        </div>
        <div className="forecast-item wind">
          Wind
          <ArrowRightIcon fontSize="small" />
        </div>
        <div className="forecast-item">{minT}°C</div>
        <div className="forecast-item">{maxT}°C</div>
        <div className="forecast-item">{windSpeed}mph</div>
      </div>
    </ForecastCard>
  );
};

export default DayForecastCard;
// style" https://gist.github.com/hamedbaatour
