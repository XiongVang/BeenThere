import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Route, Redirect } from "react-router-dom";

// actions
import { register, authenticate } from "../../auth.actions.jsx";
import { setIsRegistered } from "../../auth_util.actions.jsx";

import RegisterForm from "./register_form.component.jsx";

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
    const { isRegistered, isAuthenticated } = this.props;

    return isRegistered || isAuthenticated ? (
      <Redirect to="/login" />
    ) : (
      <div className="section container center-align">
        <div className="section card ">
          <div className="section">
            <span className="card-title">Register</span>
            <p>Please choose a username and password:</p>
          </div>
          <div className="divider" />
          <RegisterForm onSubmit={this.handleSubmit} />
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
