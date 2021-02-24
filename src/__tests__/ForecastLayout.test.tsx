import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";
import ForecastLayout from "../components/ForecastsLayout";

describe("ForecastLayout Component", () => {
  let component = <ForecastLayout woeid={2122265} />;

  beforeEach(() => {
    global.alert = jest.fn();
    render(<App />);
  });

  it("should render with given props", () => {
    expect(component).toMatchSnapshot();
  });
});
