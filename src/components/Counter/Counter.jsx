import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h3 data-testid="counter">{counter}</h3>
    </>
  );
};

export default Counter;
