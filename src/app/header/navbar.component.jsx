import React from "react";
import { Link } from "react-router-dom";

const NavBar = props => {
  console.log("NavBar props:", props);
  
  const loginOrLogout = props.isAuthenticated ? (
    <button
      onClick={props.onLogout}
      className="btn btn-outline-success my-2 my-sm-0"
    >
      Logout
    </button>
  ) : (
    <button className="btn btn-outline-success my-2 my-sm-0">
      <Link to="/login">Login</Link>
    </button>
  );

  return (
    <nav className="navbar sticky-top navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        BeenThere
      </Link>
      {loginOrLogout}
    </nav>
  );
};
export default NavBar;
