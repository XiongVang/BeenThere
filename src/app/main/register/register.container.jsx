import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { register } from "../../../actions/register.action.jsx";
import { bindActionCreators } from "redux";
import { Route, Redirect } from "react-router-dom";

import RegisterForm from "./registerForm.component.jsx";

class RegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegistered: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.register(values);
    this.setState({
      isRegistered: true
    });
  }

  render() {
    const { isRegistered } = this.state;

    return (
      <div className="card">
        <div className="card-body">
          <Route
            render={() =>
              this.state.isRegistered ? (
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
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ register }, dispatch);
}
export default connect(null, mapDispatchToProps)(RegisterContainer);
