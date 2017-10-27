import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";

// actions
import { login, authenticate } from "../../auth.action.jsx";

import LoginForm from "./login_form.component.jsx";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.authenticate();
  }

  render() {
    const { isAuthenticated, login } = this.props;

    return isAuthenticated ? (
      <Redirect to="/home" />
    ) : (
      <div className="section container center-align">
        <div className="section card">
          <div className="section">
            <span className="card-title">Login</span>
            <p>Please enter email and password:</p>
          </div>
          <div className="divider" />
          <LoginForm onSubmit={login} />
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
