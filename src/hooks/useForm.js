import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [form, setform] = useState(initialState);

  const handleForm = (e) => {
    setform((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const reset = () => setform(initialState)

  return [form, handleForm, reset ];
};
