import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

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

const AuthButton = props => {
  return props.isAuthenticated ? (
    <button
      onClick={props.handleLogout}
      className="btn btn-outline-success my-2 my-sm-0"
    >
      Logout
    </button>
  ) : (
    <button className="btn btn-outline-success my-2 my-sm-0">
      <Link to="/login"> Login</Link>
    </button>
  );
};

export default NavBar;
