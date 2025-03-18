import React, { useEffect, useRef, useState } from "react";

const UseRefHook = () => {
  const inputRef = useRef(1000);
  const inputRef2 = useRef(2000);
  
  useEffect(() => {
    console.log(inputRef.current.value)
    inputRef.current.focus()
  },[])


  // componentDiMount

  let getFormValue = () => {
    console.log(inputRef.current.value)
    console.log(inputRef2.current.value)
  }

  return (
    <div className="container mt-5 offset-3 col-md-6">
      <div className="form-group">
        <label htmlFor="">Enter a text 1</label>
        <input type="text" className="form-control" ref={inputRef} />
      </div>

      <div className="form-group">
        <label htmlFor="">Enter a text 2</label>
        <input type="text" className="form-control" ref={inputRef2} />
      </div>

      <div className="mt-3">
        <button className="btn btn-outline-primary" onClick={getFormValue}>Submit</button>
      </div>
    </div>
  );
};

export default UseRefHook;
