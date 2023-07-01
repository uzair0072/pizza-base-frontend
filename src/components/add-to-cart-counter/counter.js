import React, { useState } from "react";
import "./counter.css";

function Counter() {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter-container">
      <button className="counter-button" onClick={decrement}>-</button>
      <div className="counter-display">{count}</div>
      <button className="counter-button" onClick={increment}>+</button>
    </div>
  );
}

export default Counter;
