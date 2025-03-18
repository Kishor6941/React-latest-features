import React, { useReducer } from "react";

const UseReducerHook = () => {
  let initailState = 0;
  const [state, dispatch] = useReducer(reducer, initailState);

  function reducer(state, action) {
    console.log(state, action);

    switch (action.type) {
      case "INC":
        return state + 1;
      case "DEC":
        return state - 1;
      default:
    }
  }
  
  return (
    <div className="offset-md-4 mt-4">
      <h1>{state}</h1>
      <button
        className="btn btn-outline-success"
        onClick={() => dispatch({ type: "INC" })}
      >
        Increment
      </button>{" "}
      <button
        className="btn btn-outline-danger"
        onClick={() => dispatch({ type: "DEC" })}
      >
        Decrement
      </button>
    </div>
  );
};

export default UseReducerHook;
