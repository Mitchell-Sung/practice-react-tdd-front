import { useState } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const plusCounter = () => {
    setCounter(counter + 1);
  };

  const minusCounter = () => {
    setCounter(counter - 1);
  };

  const counterDisable = () => {
    setDisabled((prev) => !prev);
  };

  return (
    <div className="main-container">
      <h1 className="counter-container mt-30" data-testid="counter">
        {counter}
      </h1>
      <div className="buttons-container mt-30">
        <button
          data-testid="plus-button"
          onClick={plusCounter}
          disabled={disabled}
        >
          +
        </button>
        <button
          data-testid="minus-button"
          onClick={minusCounter}
          disabled={disabled}
        >
          -
        </button>
      </div>
      <div className="onOff-button">
        <button
          data-testid="onOff-button"
          style={{ backgroundColor: '#4caf50', width: 160 }}
          onClick={counterDisable}
        >
          On/Off
        </button>
      </div>
    </div>
  );
};

export default App;
