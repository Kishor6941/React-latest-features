import React, { useDeferredValue, useState } from "react";

const UseDeferredValueHook = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);

  let deferData = useDeferredValue(data)

  let getInputValue = (e) => {
    setInputValue(e.target.value);

    let list = [];
    for (let i = 0; i < 30000; i++) {
      list.push(inputValue);
    }
    setData(list);
  }

  return (
    <div className="container mt-5 off-set-4">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={inputValue}
          onChange={(e) => getInputValue(e)}
        />
      </div>
      <ul>
        {
          deferData.map((ele,i) => (
            <li key={i}>{ele}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default UseDeferredValueHook;
