
import { useState } from "react";

export const useForm = (initialValue) => {
  const [values, setFormValues] = useState(initialValue);

  const handleChanges = e => {
    setFormValues({ ...values, [e.target.name]: e.target.value });
  };



  return [values, handleChanges];
};