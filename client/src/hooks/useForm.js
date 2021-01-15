// write your custom hook here to control your checkout form
import e from "cors";
import { useState } from "react";

export const useForm = (initialValue) => {
  const [values, setFormValues] = useState(initialValue);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChanges = e => {
    setFormValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  }

  return [values, handleChanges, handleSubmit, showSuccessMessage];
};