import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { logout, authenticate } from "../../actions/auth.actions.jsx";

import NotAuthNavBar from "./notAuthNavbar.component.jsx";
import IsAuthNavBar from "./isAuthNavbar.component.jsx";

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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logout }, dispatch);
}

function mapStateToProps(store) {
  return { isAuthenticated: store.authReducer.isAuthenticated };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
