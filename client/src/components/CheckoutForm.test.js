import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

test("form header renders", () => {
  //Arrange
  render(<CheckoutForm/>)
  const formHeader = screen.getByText(/Checkout foRm/i)
  
  //Act
  //n/a for this test

  //Assert
  expect(formHeader).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
  //Arrange
  render(<CheckoutForm/>)
  const firstName = screen.getByLabelText(/first name/i);
  const lastName = screen.getByLabelText(/last name/i);
  const address = screen.getByLabelText(/address/i);
  const city = screen.getByLabelText(/city/i);
  const state = screen.getByLabelText(/STATE/i);
  const zip = screen.getByLabelText(/zIp/i);
  const button = screen.getByRole('button');
  
  //Act
  userEvent.type(firstName, 'test firstName');
  userEvent.type(lastName, 'test lastName');
  userEvent.type(address, '1234 test address');
  userEvent.type(city, 'test cityName');
  userEvent.type(state, 'test ST');
  userEvent.type(zip, '12345');
  userEvent.click(button);
  
  //Assert
  const successMessage = await screen.findByTestId("successMessage");
  expect(successMessage).toBeInTheDocument();
  
});
