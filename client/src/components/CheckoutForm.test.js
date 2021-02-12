import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

test("form header renders", () => {
  render(<CheckoutForm/>)
  const formHeader = screen.getByText(/Checkout foRm/i)
  expect(formHeader).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm/>)
  const button = screen.getByRole('button');
  const zip = screen.getByLabelText(/zIp/i);
  const address = screen.getByLabelText(/address/i);
  const state = screen.getByLabelText(/STATE/i);
  const city = screen.getByLabelText(/city/i);
  const lastName = screen.getByLabelText(/last name/i);
  const firstName = screen.getByLabelText(/first name/i);
  
  userEvent.type(zip, '12345');
  userEvent.type(state, 'test ST');
  userEvent.type(city, 'test cityName');
  userEvent.click(button);
  userEvent.type(address, '1234 test address');
  userEvent.type(lastName, 'test lastName');
  userEvent.type(firstName, 'test firstName');
  
  const successMessage = await screen.findByTestId("successMessage");
  expect(successMessage).toBeInTheDocument();  
})