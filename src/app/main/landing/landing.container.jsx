import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import Landing from "./landing.component.jsx";

class LandingContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("LandingContainer props:", this.props);
    return (
      <Route
        render={() =>
          this.props.isAuthenticated ? (
            <Redirect to="/userpage" />
          ) : (
            <Landing />
          )}
      />
    );
  }
}

function mapStateToProps(store) {
  return { isAuthenticated: store.auth.isAuthenticated };
}

export default connect(mapStateToProps)(LandingContainer);
