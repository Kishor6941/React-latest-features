import React from "react";
import WithHOC from "./HOC";

const CounterOne = ({ count, setCount }) => {
  return (
    <div>
      <h1>CounterOne</h1>
      <h1>{count}</h1>
      <button
        onClick={() => setCount((count) => count + 1)}
        className="btn btn-success"
      >
        Increment
      </button>
    </div>
  );
};

export default WithHOC(CounterOne);
