import { useState } from 'react';
import Counter from '../Counter/Counter.jsx';
import Increment from '../Increment/Increment.jsx';
import Decrement from '../Decrement/Decrement.jsx';

import './Page.css';

const Page = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="outer-main-container">
      <div className="inner-main-container">
        <Counter counter={counter} />
        <div className="counter-control-container">
          <Increment counter={counter} setCounter={setCounter} />
          <Decrement counter={counter} setCounter={setCounter} />
        </div>
      </div>
    </div>
  );
};

export default Page;
