import React, { useState, useTransition } from "react";

const UseTransitionHook = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);

  const [isPending, startTransition] = useTransition();


  let getInputValue = (e) => {
    setInputValue(e.target.value);

   startTransition(() => {
    let list = [];
    for (let i = 0; i < 30000; i++) {
      list.push(inputValue);
    }

    setData(list);
   })
  }
  return (
    <div className="mt-5 col-md-6 offset-md-3">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={inputValue}
          onChange={(e) => getInputValue(e)}
        />
      </div>
      <ul>
       { isPending ? <h1>Loading...</h1> :
        data.map((ele,index) => (
          <li key={index}>{ele}</li>
        ))
       }
      </ul>
    </div>
  );
};

export default UseTransitionHook;
