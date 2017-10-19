import React from "react";
import { Link } from "react-router-dom";

const Landing = (props) => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
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

export default Landing;
