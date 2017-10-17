import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="w3-center">
      <Link to="/newuser" className="w3-btn w3-grey w3-round">
        Register
      </Link>
      or
      <Link to="/about" className="w3-btn w3-grey w3-round">
        Learn more
      </Link>
    </div>
  );
};

export default Landing;
