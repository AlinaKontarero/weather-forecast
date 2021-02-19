import * as React from "react";
import styled from "styled-components";
import { makeid } from "../utils/makeid";

const ItemsLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  justify-items: center;
  align-items: center;
  justify-content: space-between;
  grid-auto-flow: dense;
`;

interface Props {
  children: JSX.Element[]
}

const ForecastLayout = (props: Props) => {
  return (
    <ItemsLayout>
      {props.children.map((f) => (
        <div key={makeid()}>{f}</div>
      ))}
    </ItemsLayout>
  );
};

export default ForecastLayout;
