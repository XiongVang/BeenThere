import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Route, Redirect } from "react-router-dom";

// actions
import { register, authenticate } from "../../../actions/auth.actions.jsx";
import { setIsRegistered } from "../../../actions/util.actions.jsx";

import RegisterForm from "./registerForm.component.jsx";

class RegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.authenticate();
  }

  handleSubmit(values) {
    this.props.register(values);
  }

  componentWillUnmount() {
    this.props.setIsRegistered(false);
  }
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <Route
            render={() =>
              this.props.isRegistered || this.props.isAuthenticated ? (
                <Redirect to="/login" />
              ) : (
                <RegisterForm onSubmit={this.handleSubmit} />
              )}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    isAuthenticated: store.auth.isAuthenticated,
    isRegistered: store.register.isRegistered
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { register, authenticate, setIsRegistered },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
