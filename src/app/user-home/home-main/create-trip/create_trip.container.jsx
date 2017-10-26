import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";

// form
import CreateTripForm from "./create_trip_form.component.jsx";

// actions
import { createTrip, fetchUser } from "../../home.action.jsx";
import { setTripCreated } from "../../home_utils.action.jsx";

class CreateTrip extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillUnmount() {
    if (this.props.tripCreated) {
      this.props.fetchUser();
      this.props.setTripCreated(false);
    }
  }

  onSubmit(values) {
    this.props.createTrip(values);
  }

  render() {
    const { tripCreated } = this.props;
    return tripCreated ? (
      <Redirect to="/home" />
    ) : (
      <div className="section container center-align">
        <div className="section card ">
          <div className="section">
            <span className="card-title">New Trip:</span>
            <p>Create a new trip.</p>
          </div>
          <div className="divider" />
          <CreateTripForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

function mapPropsToState(store) {
  return { tripCreated: store.homeUtilsReducer.tripCreated };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createTrip, fetchUser, setTripCreated },
    dispatch
  );
}
export default connect(mapPropsToState, mapDispatchToProps)(CreateTrip);
