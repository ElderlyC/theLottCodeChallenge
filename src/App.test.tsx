import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("loading text loads", () => {
  render(<App />);
  const linkElement = screen.getByText("Loading...");
  expect(linkElement).toBeInTheDocument();
});
