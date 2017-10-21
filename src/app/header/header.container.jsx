import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { logout, authenticate } from "../../actions/auth.actions.jsx";

import NotAuthNavBar from "./notAuthNavbar.component.jsx";

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <NotAuthNavBar />
      </header>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logout, authenticate }, dispatch);
}

function mapStateToProps(store) {
  return { isAuthenticated: store.authReducer.isAuthenticated };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
