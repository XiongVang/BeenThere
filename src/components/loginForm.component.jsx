import React from "react";
import { Field, reduxForm } from "redux-form";

let Form = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <Field name="username" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

const LoginForm = reduxForm({
  // a unique name for the form
  form: "login"
})(Form);

export default LoginForm;
