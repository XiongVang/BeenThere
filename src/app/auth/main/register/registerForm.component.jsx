import React from "react";
import { Field, reduxForm } from "redux-form";

const Form = props => {
  const { handleSubmit } = props;
  return (
    <div className="section">
      <form onSubmit={handleSubmit} className="center-align container col s6">
        <div className="input-field col s6">
          <Field
            className="validate"
            name="username"
            component="input"
            type="text"
            id="username"
          />
          <label htmlFor="username">Username</label>
        </div>
        <div className="input-field col s6">
          <Field
            className="validate"
            name="password"
            component="input"
            type="password"
            id="password"
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="section">
          <button
            className=" btn waves-effect waves-light"
            type="submit"
            name="Submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

const RegisterForm = reduxForm({
  // a unique name for the form
  form: "register"
})(Form);

export default RegisterForm;
