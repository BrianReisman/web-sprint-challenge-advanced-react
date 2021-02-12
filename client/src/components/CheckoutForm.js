import React, {useState} from "react";
import { useForm } from "../hooks/useForm";

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

const CheckoutForm = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, handleChanges] = useForm(
    initialValue
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label htmlFor="firstName">
          First Name:
          <input
            name="firstName"
            id="firstName"
            value={values.firstName}
            onChange={handleChanges}
          />
        </label>
        <label htmlFor="lastName">
          Last Name:
          <input
            name="lastName"
            id="lastName"
            value={values.lastName}
            onChange={handleChanges}
          />
        </label>
        <label htmlFor="address">
          Address:
          <input
            name="address"
            id="address"
            value={values.address}
            onChange={handleChanges}
          />
        </label>
        <label htmlFor="city">
          City:
          <input
            name="city"
            id="city"
            value={values.city}
            onChange={handleChanges}
          />
        </label>
        <label htmlFor="state">
          State:
          <input
            name="state"
            id="state"
            value={values.state}
            onChange={handleChanges}
          />
        </label>
        <label htmlFor="zip">
          Zip:
          <input
            name="zip"
            id="zip"
            value={values.zip}
            onChange={handleChanges}
          />
        </label>
        <button>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {values.firstName} {values.lastName}
          </p>
          <p>{values.address}</p>
          <p>
            {values.city}, {values.state} {values.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
