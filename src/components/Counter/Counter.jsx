import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h3 data-testid="counter">{counter}</h3>
    </div>
  );
};

export default Counter;
