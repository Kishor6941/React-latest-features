
import React, { useActionState } from "react";

const UseActionStateHook = () => {
  let handleSubmit = async (prevData, formData) => {
    let email = formData.get("email");
    let password = formData.get("password");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(email, password);
    if (email && password) {
      return { message: "Data submitted successfully", email, password };
    } else {
      return { error: "Please fill all the fields" };
    }
  };

  const [data, action, pending] = useActionState(handleSubmit, {
    email: "a@gmail.com",
    password: "fdf",
  });
  console.log(data);
  return (
    <div className="col-md-6 offset-3">
      <h1>useActionState Hook</h1>
      <form action={action}>
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            defaultValue={data?.email}
            type="text"
            placeholder="email"
            className="form-control"
            name="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input
            defaultValue={data?.password}
            type="password"
            placeholder="password"
            className="form-control"
            name="password"
          />
        </div>
        <div className="mt-3">
          <button className="btn btn-outline-success" disabled={pending}>
            Submit
          </button>
          {data?.error && <p className="text-danger">{data.error}</p>}
          {data?.message && <p className="text-success">{data.message}</p>}
          {data?.email && <p className="text-success">Email : {data.email}</p>}
          {data?.password && (
            <p className="text-success">Password : {data.password}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default UseActionStateHook;
