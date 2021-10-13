import { useState } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);

  const plusCounter = () => {
    setCounter(counter + 1);
  };

  const minusCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="main-container">
      <h1 className="counter-container mt-30" data-testid="counter">
        {counter}
      </h1>
      <div className="buttons-container mt-30">
        <button data-testid="plus-button" onClick={plusCounter}>
          +
        </button>
        <button data-testid="minus-button" onClick={minusCounter}>
          -
        </button>
      </div>
    </div>
  );
};

export default App;
