import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Route, Redirect, Link } from "react-router-dom";

// actions
import { authenticate } from "../auth/auth.actions.jsx";

// components
import SideNav from "./sideNav.component.jsx";
import Details from "./details.component.jsx";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.authenticate();
  }

  render() {
    return this.props.isAuthenticated ? (
      <div className="user-home-page">
        <header>
          <nav className="teal">
            <div className="container">
              <div className="nav-wrapper">
                <Link id="logo-container" to="/" className="brand-logo">
                  BeenThere
                </Link>
                <a
                  href="#"
                  data-activates="slide-out"
                  className="home-side-nav-trigger left hide-on-large-only nav-item"
                >
                  <i className="material-icons">menu</i>
                </a>
              </div>
            </div>
          </nav>
          <SideNav />
        </header>
        <main>
          <Details />
        </main>
        <footer className="page-footer white">
          <div className="footer-copyright">
            <div className="black-text container">Made by Xiong Vang 2017</div>
          </div>
        </footer>
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
  return bindActionCreators({ authenticate }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
