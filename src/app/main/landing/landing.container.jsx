import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Route, Redirect } from "react-router-dom";
import { authenticate } from "../../../actions/auth.actions.jsx";

import Landing from "./landing.component.jsx";

class LandingContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.authenticate();
  }

  render() {
    console.log("LandingContainer props:", this.props);
    if (this.props.isAuthenticated) {
      return <Redirect to="/userpage" />;
    } else {
      return <Landing />;
    }
  }
}

function mapStateToProps(store) {
  return { isAuthenticated: store.auth.isAuthenticated };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ authenticate }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);
