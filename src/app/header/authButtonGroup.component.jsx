import React from "react";
import { Link } from "react-router-dom";
const AuthButtonGroup = props => {
  return props.isAuthenticated ? (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button type="button" className="btn">
        <Link to="/home" role="button">
          <i className="material-icons">face</i>
        </Link>
      </button>
      <span className="btn-separator" />
      <button
        type="button"
        onClick={props.handleLogout}
        className="btn btn-outline-secondary"
      >
        Logout
      </button>
    </div>
  ) : (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button type="button" className="btn">
        <Link to="/newuser" role="button">
          {" "}
          Register
        </Link>
      </button>
      <span className="btn-separator" />
      <button type="button" className="btn">
        <Link to="/login" role="button">
          Login
        </Link>
      </button>
    </div>
  );
};

export default AuthButtonGroup;
