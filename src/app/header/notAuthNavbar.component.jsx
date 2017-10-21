import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NotAuthNavbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="teal" role="navigation">
        
        <div className="nav-wrapper container">
          {/* logo */}
          <Link id="logo-container" to="/" className="brand-logo">
            BeenThere
          </Link>

          {/* regular nav links - hidden for tablets or smaller */}
          <ul className="right hide-on-med-and-down">
            <Link to="/about">About</Link>
            <Link to="/newuser">Register</Link>
            <Link to="/login">Login</Link>
          </ul>

          {/* hamburger icon - hidden for desktop only*/}
          <a
            href="#"
            data-activates="nav-mobile"
            className="hide-on-large-only not-auth-button-collapse"
          >
            <i className="material-icons">menu</i>
          </a>

          {/* side-nav for tablet and smaller */}
          <ul id="nav-mobile" className="side-nav text-black">
            <Link className="text-black" to="/about">
              About
            </Link>
            <Link className="text-black" to="/newuser">
              Register
            </Link>
            <Link className="text-black" to="/login">
              Login
            </Link>
          </ul>
        </div>
      </nav>
    );
  }
}
