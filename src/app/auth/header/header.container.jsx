import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// components
import NotAuthNavBar from "./not_auth_navbar.component.jsx";
import IsAuthNavBar from "./is_auth_navbar.component.jsx";

// actions
import { logout } from "../auth.actions.jsx";

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { logout, isAuthenticated } = this.props;
    return (
      <header>
        <div className="navbar-fixed">
          <nav className="teal" role="navigation">
            {isAuthenticated ? (
              <IsAuthNavBar handleLogout={logout} />
            ) : (
              <NotAuthNavBar />
            )}
          </nav>
        </div>
      </header>
    );
  }
}

function mapStateToProps(store) {
  return { isAuthenticated: store.authReducer.isAuthenticated };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logout }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
