import React, { Component } from "react";
import { Link } from "react-router-dom";

const NotAuthNavbar = () => {
  return (
    <div className="nav-wrapper container">
      {/* logo */}
      <Link id="logo-container" to="/" className="brand-logo">
        BeenThere
      </Link>

      {/* hamburger icon - hidden for desktop only*/}
      <a
        href="#"
        data-activates="not-auth-dropdown"
        className="right hide-on-large-only not-auth-dropdown"
      >
        <i className="material-icons">more_vert</i>
      </a>

      {/* regular nav links - hidden for tablets or smaller */}
      <ul className="right hide-on-med-and-down">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/newuser">Register</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      {/* dropdown menu */}
      <ul id="not-auth-dropdown" className="dropdown-content">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/newuser">Register</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default NotAuthNavbar;
