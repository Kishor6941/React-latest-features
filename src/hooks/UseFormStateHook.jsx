import React,{useFormState} from "react";

const UseFormStateHook = () => {
    const [] = useFormState({
        email: "",
        password: "",
    });
  return (
    <div className="col-md-6 offset-3 mt-4 mb-4">
      <form>
        <div className="form-group mb-2">
          <label>Email address</label>
          <input
            type="email"
            className="form-control mt-2"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div className="form-group mb-2 mt-2">
          <label className="mb-2">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UseFormStateHook;
