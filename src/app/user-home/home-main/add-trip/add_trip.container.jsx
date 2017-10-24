import React, { Component } from "react";

// form
import AddTripForm from "./add_trip_form.component.jsx";

class AddTrip extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log("Add trip values:", values);
  }
  render() {
    return (
      <div className="section container center-align">
        <div className="section card ">
          <div className="section">
            <span className="card-title">New Trip:</span>
            <p>Create a new trip.</p>
          </div>
          <div className="divider" />
          <AddTripForm onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default AddTrip;
