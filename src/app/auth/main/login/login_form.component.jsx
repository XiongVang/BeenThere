import React from "react";
import { Field, reduxForm } from "redux-form";

const Form = props => {
  return (
    <div className="section center-align">
      <form onSubmit={props.handleSubmit} className="container col s3">
        <div className="input-field col s3">
          <Field
            className="validate"
            name="username"
            component="input"
            type="text"
            id="username"
          />
          <label htmlFor="username">Username</label>
        </div>
        <div className="input-field col s3">
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
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

const LoginForm = reduxForm({
  // a unique name for the form
  form: "login"
})(Form);

export default LoginForm;
