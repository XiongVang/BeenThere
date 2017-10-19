import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions/login.action.jsx";
import { bindActionCreators } from "redux";
import { Route, Redirect } from "react-router-dom";

import LoginForm from "../components/loginForm.component.jsx";

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.login(values);
  }

  render() {
    const { isAuthenticated } = this.props;
    return (
      <Route
        render={() =>
          isAuthenticated ? (
            <Redirect to="/userpage" />
          ) : (
            <LoginForm onSubmit={this.handleSubmit} />
          )}
      />
    );
  }
}

function mapStateToProps(store) {
  console.log("Login state", store);
  return { isAuthenticated: store.auth.isAuthenticated };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
