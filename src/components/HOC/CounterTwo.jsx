import React from "react";
import WithHOC from "./HOC";

const CounterTwo = ({ count, setCount }) => {
  return (
    <div>
      <h1>CounterTwo</h1>
      <h1>{count}</h1>
      <button
        onClick={() => setCount((count) => count + 1)}
        className="btn btn-primary"
      >
        Increment
      </button>
    </div>
  );
};

export default WithHOC(CounterTwo);
