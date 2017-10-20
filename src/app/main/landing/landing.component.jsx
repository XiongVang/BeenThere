import React from "react";
import { Link } from "react-router-dom";

const Landing = props => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-3">Welcome!</h1>
        <p className="lead">Store and share your travel memories here.</p>
        <hr className="my-4" />
        <p>Register to start.</p>
        <p className="lead">
          <Link className="btn btn-primary btn-lg" role="button" to="/newuser">
            Register
          </Link>
          or
          <Link className="btn btn-primary btn-lg" role="button" to="/about">
            Learn more
          </Link>
        </p>
      </div>
    </div>
  );
};

export default (Landing);
