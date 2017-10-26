import React from "react";
import { Field, reduxForm } from "redux-form";

const Form = props => {
  const { handleSubmit } = props;
  return (
    <div className="section">
      <form onSubmit={handleSubmit} className="center-align container col s6">
        <div className="input-field col s3">
          <i className="material-icons prefix">account_box</i>
          <Field
            className="validate"
            name="name"
            component="input"
            type="text"
            id="name"
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="input-field col s3">
          <i className="material-icons prefix">email</i>
          <Field
            className="validate"
            name="email"
            component="input"
            type="email"
            id="email"
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-field col s3">
          <i className="material-icons prefix">lock</i>
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
