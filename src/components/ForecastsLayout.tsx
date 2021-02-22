import * as React from "react";
import styled from "styled-components";
import { makeid } from "../utils/makeid";
import { DayForecast, Location } from "../types";
import WeatherComponent from "./WeatherContainer";
import useWeather from "../hooks/useWeather";
import { CircularProgress } from "@material-ui/core";

const ItemsLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
  justify-items: center;
  align-items: center;
  justify-content: space-between;
  grid-auto-flow: dense;
  max-width: 700px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  padding: 20px;
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
  };
`;

interface Props {
  location: Location
  children?: JSX.Element[];
}

const ForecastLayout = (props: Props) => {
  const [forecast, reload ] = useWeather(props.location.woeid)
  console.log('forecast::: ', forecast)
  
  return (
    <ItemsLayout>
      {Array.isArray(forecast) 
      ? <>{forecast.map(f => <WeatherComponent forecast={f} key={makeid()} />)}</>
      : <CircularProgress color="secondary" style={{ marginLeft: '45%', marginTop: '15px'}} />
    }
    </ItemsLayout>
  );
};

export default ForecastLayout;
