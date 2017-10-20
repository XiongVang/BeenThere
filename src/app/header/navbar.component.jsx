import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

// components
import AuthButtonGroup from "./authButtonGroup.component.jsx";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate() {
    console.log("NavBar updated");
    return true;
  }

  render() {
    return (
      <nav className="navbar sticky-top navbar-light ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="drawer"
          data-target="#dw-s1"
        >
          <span className="sr-only">Toggle drawer</span>
          <i className="material-icons">menu</i>
        </button>
        <Link className="navbar-brand" to="/">
          BeenThere
        </Link>
        <div className="nav navbar-nav">
          <AuthButtonGroup
            className="nav-item"
            handleLogout={this.props.handleLogout}
            isAuthenticated={this.props.isAuthenticated}
          />
        </div>
      </nav>
    );
  }
}

export default NavBar;
