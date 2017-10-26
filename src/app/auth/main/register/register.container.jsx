import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Route, Redirect } from "react-router-dom";

// actions
import { register, authenticate } from "../../auth.action.jsx";
import { setIsRegistered } from "../../auth_utils.action.jsx";

import RegisterForm from "./register_form.component.jsx";

class RegisterContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.authenticate();
  }
  componentWillUnmount() {
    this.props.setIsRegistered(false);
  }

  render() {
    const { isRegistered, isAuthenticated, register } = this.props;

    return isRegistered || isAuthenticated ? (
      <Redirect to="/login" />
    ) : (
      <div className="section container center-align">
        <div className="section card ">
          <div className="section">
            <span className="card-title">Register</span>
            <p>Please enter info below:</p>
          </div>
          <div className="divider" />
          <RegisterForm onSubmit={register} />
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
