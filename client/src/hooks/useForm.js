
import { useState } from "react";

export const useForm = (initialValue) => {
  const [values, setFormValues] = useState(initialValue);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  return [values, handleChanges, handleSubmit, showSuccessMessage];
};