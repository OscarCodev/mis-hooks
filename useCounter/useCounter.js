import { useState } from "react";

export const useCounter = (stateInicial) => {
  const [counter, setCounter] = useState(stateInicial);

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  const increment = () => {
    setCounter(counter + 1);
  };

  return [counter, { decrement, reset, increment }];
};