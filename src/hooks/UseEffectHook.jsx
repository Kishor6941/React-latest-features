import React, { useEffect } from "react";

const UseEffectHook = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  let getUserData = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await response.json();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="container mt-5 offset-3">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          <li>{data.id}</li>
          <li>{data.title}</li>
          <li>{data.completed ? 'completed' : "incomplete"}</li>
        </ul>
      )}
    </div>
  );
};

export default UseEffectHook;
