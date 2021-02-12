import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("sanity check", () => {
  expect(2 * 4).toBe(8);
});

test("if header is present", () => {
  render(<App />);
  const heading = screen.getByText(/React Plants/i);
  const icon = screen.getByText(/🌿/i);
});

test("if there is a page role", () => {
  render(<App />);
  const page = screen.queryByRole('page')
  // screen.debug();
});
