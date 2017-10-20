import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import AuthButton from "./authButton.component.jsx";

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
      <nav className="navbar sticky-top navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          BeenThere
        </Link>
        <AuthButton
          handleLogout={this.props.handleLogout}
          isAuthenticated={this.props.isAuthenticated}
        />
      </nav>
    );
  }
}
export default NavBar;
