import React, { Component } from "react";
import { Link } from "react-router-dom";

const IsAuthNavbar = props => {
  const { handleLogout } = props;
  return (
    <div className="nav-wrapper container">
      {/* logo */}
      <Link id="logo-container" to="/" className="brand-logo">
        BeenThere
      </Link>

      {/* hamburger icon - hidden for desktop only*/}
      <a
        href="#"
        data-activates="is-auth-dropdown"
        className="right hide-on-large-only is-auth-dropdown-trigger"
      >
        <i className="material-icons">more_vert</i>
      </a>

      {/* regular nav links - hidden for tablets or smaller */}
      <ul className="right hide-on-med-and-down">
        <li>
          <Link to="/home">
            <i className="user-icon material-icons">account_circle</i>
          </Link>
        </li>
        <li>
          <Link to="/" onClick={handleLogout}>
            Logout
          </Link>
        </li>
      </ul>

      {/* dropdown menu */}
      <ul id="is-auth-dropdown" className="dropdown-content">
        <li>
          <Link className="user-icon" to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/" onClick={handleLogout}>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default IsAuthNavbar;
