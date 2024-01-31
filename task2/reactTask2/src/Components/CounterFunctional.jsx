import React, { useState } from "react";

const CounterFunctional = () => {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount((prev) => prev + 1);
  };

  const handleDec = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="main">
      <div className="continer">
        <h2> Counter App</h2>
        <button className="btn" 
        onClick={handleDec} 
        disabled={count === 0}>
          -
        </button>
        <span>{count}</span>
        <button className="btn" 
        onClick={handleInc}>
          +
        </button>
        <button className="btn reset" 
        onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterFunctional;
