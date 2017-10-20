import React from "react";
import { Link } from "react-router-dom";
const AuthButton = props => {
  return props.isAuthenticated ? (
    <button
      onClick={props.handleLogout}
      className="btn btn-outline-success my-2 my-sm-0"
    >
      Logout
    </button>
  ) : (
    <button className="btn btn-outline-success my-2 my-sm-0">
      <Link to="/login"> Login</Link>
    </button>
  );
};

export default AuthButton;
