import React from "react";

const Login = () => {
  return (
    <form
      className="w3-container w3-card-4 w3-light-grey w3-text-blue w3-margin"
    >
      <h2 className="w3-center">Login</h2>

      <div className="w3-row w3-section">
        <div className="w3-col w50">
          <i className="w3-xxlarge fa fa-user" />
        </div>
        <div className="w3-rest">
          <input
            className="w3-input w3-border"
            name="username"
            type="text"
            placeholder="username"
          />
        </div>
      </div>

      <div className="w3-row w3-section">
        <div className="w3-col w50">
          <i className="w3-xxlarge fa fa-password" />
        </div>
        <div className="w3-rest">
          <input
            className="w3-input w3-border"
            name="password"
            type="password"
            placeholder="password"
          />
        </div>
      </div>

      <button className="w3-button w3-block w3-section w3-blue w3-ripple w3-padding">
        Register
      </button>
    </form>
  );
};

export default Login;
