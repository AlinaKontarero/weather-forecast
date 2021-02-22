import * as React from "react";
import styled from "styled-components";
import { makeid } from "../utils/makeid";

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
  children: JSX.Element[];
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
