import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Route, Redirect } from "react-router-dom";

// actions
import { register, authenticate } from "../../auth.actions.jsx";
import { setIsRegistered } from "../../authUtil.actions.jsx";

import RegisterForm from "./registerForm.component.jsx";

class RegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.authenticate();
    console.log("RegisterContainer -> props:", this.props);
  }

  handleSubmit(values) {
    this.props.register(values);
  }

  componentWillUnmount() {
    this.props.setIsRegistered(false);
  }
  render() {
    return (
      <div className=" container center-align">
        <div className=" card ">
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
    isAuthenticated: store.authReducer.isAuthenticated,
    isRegistered: store.authUtilsReducer.isRegistered
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { register, authenticate, setIsRegistered },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
