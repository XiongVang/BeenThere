import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Route, Redirect } from "react-router-dom";

// actions
import { authenticate } from "../auth/auth.actions.jsx";

// components
import Home from "./details.component.jsx";
import SideNav from "./sideNav.component.jsx";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.authenticate();
  }

  render() {
    return this.props.isAuthenticated ? (
      <div className="row">
        {/* <!-- Grey navigation panel --> */}
        <div className="z-depth-2 col s3">
          <SideNav />
        </div>

        {/* <!-- Teal page content  --> */}
        <div className="col s9">
          <Home />
        </div>
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
