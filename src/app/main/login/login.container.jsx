import React, { Component } from "react";
import { connect } from "react-redux";
import { login, authenticate } from "../../../actions/auth.actions.jsx";
import { bindActionCreators } from "redux";
import { Route, Redirect } from "react-router-dom";

import LoginForm from "./loginForm.component.jsx";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.authenticate();
  }

  handleSubmit(values) {
    this.props.login(values);
  }

  render() {
    const { isAuthenticated } = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <Route
            render={() =>
              isAuthenticated ? (
                <Redirect to="/userpage" />
              ) : (
                <LoginForm onSubmit={this.handleSubmit} />
              )}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return { isAuthenticated: store.auth.isAuthenticated };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login, authenticate }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
