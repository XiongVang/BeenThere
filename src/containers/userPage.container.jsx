import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/user.action.jsx";
import { bindActionCreators } from "redux";
import { Route, Redirect } from "react-router-dom";

class UserPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("UserPage props:", this.props);
    const { isAuthenticated } = this.props;
    return (
      <Route
        render={() =>
          isAuthenticated ? <h2>User Page</h2> : <Redirect to="/login" />}
      />
    );
  }
}

function mapStateToProps(store) {
  return {
    user: store.user,
    isAuthenticated: store.auth.isAuthenticated
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
