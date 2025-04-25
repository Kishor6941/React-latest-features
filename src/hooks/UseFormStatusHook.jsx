import React from "react";
import { useFormStatus } from "react-dom";

const UseFormStatusHook = () => {
  const { pending } = useFormStatus();
  let handleSubmit =  async() => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("submitted");
    // e.preventDefault()
  };
  return (
    <div className="col-md-6 offset-3">
      <h1>UseFormStatus Hook</h1>
      <form action={handleSubmit}>
        {" "}
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="email"
            className="form-control"
            name="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input
            type="passowrd"
            placeholder="password"
            className="form-control"
            name="password"
          />
        </div>
        <div className="mt-3">
          <button className="btn btn-outline-success" type="submit" disabled={pending}>
            {pending ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UseFormStatusHook;
