import React from "react";

const UseStateHook = () => {
  const [counter, setCounter] = React.useState(0);
  return (
    <div className="offset-md-4">
      <h1>UseStateHook</h1>
      <h2>Counter: {counter}</h2>
      <button
        className="btn btn-outline-secondary"
        onClick={() => setCounter(counter + 1)}
      >
        Increment
      </button>
      <button
        className="btn btn-outline-danger"
        onClick={() => setCounter(counter - 1)}
      >
        Decrement
      </button>
    </div>
  );
};

export default UseStateHook;
