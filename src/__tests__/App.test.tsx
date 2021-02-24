import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App renders correctly", () => {
  beforeEach(() => {
    global.alert = jest.fn();
  });
  test("with footer", () => {
    render(<App />);
    const footer = screen.getByText(/Made by/i);
    expect(footer).toBeInTheDocument();
  });

  test("with city search", () => {
    render(<App />);
    const searchInput = screen.getByLabelText("Select place");
    expect(searchInput).toBeInTheDocument();
  });

  test("with city search label", () => {
    render(<App />);
    const searchInputLabel = screen.getByLabelText("Select place");
    expect(searchInputLabel).toBeInTheDocument();
  });

  test("with city search input field", () => {
    const { getByTestId } = render(<App />);
    const cityInput = getByTestId("cityInput");
    expect(cityInput).toBeInTheDocument();
  });
});
