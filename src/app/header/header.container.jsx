import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { logout } from "../../actions/logout.action.jsx";

import NavBar from "./navbar.component.jsx";

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <NavBar
          onLogout={this.props.logout}
          isAuthenticated={this.props.isAuthenticated}
        />
      </header>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logout }, dispatch);
}

function mapStateToProps(store) {
  return { isAuthenticated: store.auth.isAuthenticated };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
