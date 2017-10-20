import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../../actions/user.actions.jsx";
import { authenticate } from "../../../actions/auth.actions.jsx";
import { bindActionCreators } from "redux";
import { Route, Redirect } from "react-router-dom";

class UserContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.authenticate();
    console.log("LoginContainer -> props:", this.props);
  }
  render() {
    return (
      <Route
        render={() =>
          this.props.isAuthenticated ? (
            <h2 className="card">User Page</h2>
          ) : (
            <Redirect to="/login" />
          )}
      />
    );
  }
}

function mapStateToProps(store) {
  return { isAuthenticated: store.authReducer.isAuthenticated };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser, authenticate }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
