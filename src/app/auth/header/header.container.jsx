import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// components
import NotAuthNavBar from "./not_auth_navbar.component.jsx";
import IsAuthNavBar from "./is_auth_navbar.component.jsx";

// actions
import { logout, authenticate } from "../auth.action.jsx";

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.authenticate();
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
  return bindActionCreators({ logout, authenticate }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
