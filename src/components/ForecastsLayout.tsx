import * as React from "react";
import styled from "styled-components";
import { CircularProgress, withStyles, WithStyles } from "@material-ui/core";
import { makeid } from "../utils/makeid";
import useWeather from "../hooks/useWeather";
import DayForecastCard from "./DayForecast";

const ItemsLayout = styled.div`
  display: grid;
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
  } ;
`;

interface Props extends WithStyles<typeof styles> {
  woeid: number;
}

const ForecastLayout = (props: Props) => {
  const [forecast] = useWeather(props.woeid);
  const classes = props.classes;
  return (
    <ItemsLayout>
      {Array.isArray(forecast) ? (
        <>
          {forecast.slice(0, 4).map((f) => (
            <DayForecastCard forecast={f} key={makeid()} />
          ))}
        </>
      ) : (
        <CircularProgress color="secondary" classes={{ root: classes.root }} />
      )}
    </ItemsLayout>
  );
};

const styles = {
  root: {
    marginTop: "15px",
    marginLeft: "90%",
    "@media (max-width: 768px)": {
      marginLeft: 0,
    },
  },
};

export default withStyles(styles)(ForecastLayout);
