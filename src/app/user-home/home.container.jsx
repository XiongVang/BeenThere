import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Route, Redirect, Link } from "react-router-dom";

// actions
import { authenticate, logout } from "../auth/auth.actions.jsx";

// components
import Logo from "./nav/logo.component.jsx";
import SideNav from "./nav/sideNav.component.jsx";
import Details from "./details/details.component.jsx";
import Footer from "../auth/footer/footer.component.jsx";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.authenticate();
  }

  render() {
    const { isAuthenticated, logout } = this.props;
    return isAuthenticated ? (
      <div className="user-home-page">
        <header>
          <Logo />
          <SideNav handleLogout={logout} />
        </header>
        <main>
          <Details />
        </main>
        <Footer />
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

function mapStateToProps(store) {
  return { isAuthenticated: store.authReducer.isAuthenticated };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ authenticate, logout }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
