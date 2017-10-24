import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";

// actions
import { login, authenticate } from "../../auth.actions.jsx";

import LoginForm from "./login_form.component.jsx";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log("LoginContainer -> props:", props);
  }

  componentWillMount() {
    this.props.authenticate();
    console.log("LoginContainer -> props:", this.props);
  }

  handleSubmit(values) {
    this.props.login(values);
  }

  render() {
    const { isAuthenticated } = this.props;

    return (
      <div className="section container center-align">
        <div className="section card ">
          <div className="section">
            <span className="card-title">Login</span>
            <p>Please enter username and password below:</p>
          </div>
          <div className="divider" />
          {isAuthenticated ? (
            <Redirect to="/home" />
          ) : (
            <LoginForm onSubmit={this.handleSubmit} />
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return { isAuthenticated: store.authReducer.isAuthenticated };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login, authenticate }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
