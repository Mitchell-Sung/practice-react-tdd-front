import '../../styles/button.css';

const Increment = ({ counter, setCounter }) => {
  const increaseCounter = (e) => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button data-testid="increase-button" onClieck={increaseCounter}>
        +
      </button>
    </div>
  );
};

// TODO: PropsTypes

export default Increment;
