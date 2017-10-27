import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// actions
import { fetchTrip } from "../../auth.action.jsx";

// components
import TripShare from "./trip_share.component.jsx";

class Trip extends Component {
  constructor(props) {
    super(props);
    console.log("inside Trip props:", props);
  }

  componentDidMount() {
    this.props.fetchTrip(this.props.match.params.id);
  }

  render() {
    return <TripShare trip={this.props.trip} />;
  }
}

function mapStateToProps(store) {
  return { trip: store.authReducer.trip };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTrip }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Trip);
