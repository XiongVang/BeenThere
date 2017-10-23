import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <nav className="teal">
      <div className="container">
        <div className="nav-wrapper">
          <Link id="logo-container" to="/" className="brand-logo">
            BeenThere
          </Link>
          <a
            href="#"
            data-activates="slide-out"
            className="home-side-nav-trigger left hide-on-large-only nav-item"
          >
            <i className="material-icons">menu</i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Logo;
