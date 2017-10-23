import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Route, Redirect } from "react-router-dom";

// actions
import { authenticate, logout } from "../auth/auth.actions.jsx";

// components
import HomeHeader from "./home-header/home_header.component.jsx";
import HomeMain from "./home-main/home_main.container.jsx";
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
        <HomeHeader handleLogout={logout} />
        <HomeMain />
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
