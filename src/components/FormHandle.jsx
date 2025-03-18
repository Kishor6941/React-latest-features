import React from "react";
import { useForm } from "react-hook-form";

const FormHandle = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({
    mode: "onTouched"
  });
  const { name, email, password, number, select } = errors;

  const [options] = React.useState([
    { id: 1, name: "Option 1" },
    { id: 2, name: "Option 2" },
    { id: 3, name: "Option 3" },
  ]);

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="container mt-4 col-md-6 mb-4">
      <h2>Handle Form using React Hook Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="textInput" className="form-label">
            Text Input
          </label>
          <input
            type="text"
            className="form-control"
            id="textInput"
            placeholder="Enter text"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
          />
          <small className="text-danger">{name && name.message}</small>
        </div>

        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="Enter email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            })}
          />
          <small className="text-danger">{email && email.message}</small>
        </div>

        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="passwordInput"
            placeholder="Enter password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          <small className="text-danger">{password && password.message}</small>
        </div>

        <div className="mb-3">
          <label htmlFor="numberInput" className="form-label">
            Number Input
          </label>
          <input
            type="number"
            className="form-control"
            id="numberInput"
            placeholder="Enter number"
            {...register("number", {
              required: "Number is required",
              min: {
                value: 1,
                message: "Number must be greater than 0",
              },
            })}
          />
          <small className="text-danger">{number && number.message}</small>
        </div>

        <div className="mb-3">
          <label htmlFor="selectInput" className="form-label">
            Select Option
          </label>
          <select
            className="form-select"
            id="selectInput"
            {...register("select", {
              required: "Select option is required",
            })}
          >
            <option value="">Choose...</option>
            {options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
          <small className="text-danger">{select && select.message}</small>
        </div>

        <div className="mb-3">
          <label htmlFor="textareaInput" className="form-label">
            Textarea
          </label>
          <textarea
            className="form-control"
            id="textareaInput"
            rows="3"
            {...register("description")}
          ></textarea>
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="checkboxInput"
            {...register("term")}
          />
          <label className="form-check-label" htmlFor="checkboxInput">
            Check me out
          </label>
        </div>

        <div className="mb-3">
          <label className="form-label">Radio Options</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="radioOptions"
              id="radio1"
              value="option1"
              {...register("radioOptions")}
            />
            <label className="form-check-label" htmlFor="radio1">
              Option 1
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="radioOptions"
              id="radio2"
              value="option2"
              {...register("radioOptions")}
            />
            <label className="form-check-label" htmlFor="radio2">
              Option 2
            </label>
          </div>
        </div>

        {/* <div class="mb-3">
                <label for="fileInput" class="form-label">Upload File</label>
                <input type="file" class="form-control" id="fileInput" />
            </div>
    

            <div class="mb-3">
                <label for="rangeInput" class="form-label">Range Slider</label>
                <input type="range" class="form-range" id="rangeInput" min="0" max="100" />
            </div> */}
        <hr />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormHandle;
