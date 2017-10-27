import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className=" navbar-fixed">
      <nav className="teal">
        <div className="container">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
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
    </div>
  );
};

export default Logo;
