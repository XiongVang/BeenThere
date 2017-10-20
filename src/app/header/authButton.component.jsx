import React from "react";
import { withRouter, Link } from "react-router";

// A simple component that shows the pathname of the current location
class AuthButton extends React.Component {
  render() {
    const { isAuthenticated, handleLogout } = this.props;

    return isAuthenticated ? (
      <button
        onClick={this.props.handleLogout}
        className="btn btn-outline-success my-2 my-sm-0"
      >
        Logout
      </button>
    ) : (
      <button className="btn btn-outline-success my-2 my-sm-0">
        <Link to="/login"> Login</Link>
      </button>
    );
  }
}

// Create a new component that is "connected" (to borrow redux
// terminology) to the router.
export default withRouter(AuthButton);
