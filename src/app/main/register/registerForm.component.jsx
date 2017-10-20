import React from "react";
import { Field, reduxForm } from "redux-form";

let Form = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username" className="bmd-label-floating">
          Username
        </label>
        <Field
          className="form-control"
          name="username"
          component="input"
          type="text"
          id="username"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password" className="bmd-label-floating">
          Password
        </label>
        <Field
          className="form-control"
          name="password"
          component="input"
          type="password"
          id="password"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );
};

const RegisterForm = reduxForm({
  // a unique name for the form
  form: "register"
})(Form);

export default RegisterForm;
