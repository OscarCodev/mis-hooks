import { useState } from "react";

export const useForm = (stateInicial) => {
  const [formState, setFormState] = useState(stateInicial);

  const formChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    });
  };

  const resetForm = () => {
    setFormState(stateInicial);
  };

  return [formState, { formChange, resetForm }];
};
