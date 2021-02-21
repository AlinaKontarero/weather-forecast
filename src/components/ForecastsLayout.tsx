import * as React from "react";
import styled from "styled-components";

import { makeid } from "../utils/makeid";

const ItemsLayout = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 20px;
`;

interface Props {
  dayForecasts: JSX.Element[];
}

const ForecastLayout = (props: Props) => {
  return (
    <ItemsLayout>
      {props.dayForecasts.map((f) => (
        <div key={makeid()}>{f}</div>
      ))}
    </ItemsLayout>
  );
};

export default ForecastLayout;
