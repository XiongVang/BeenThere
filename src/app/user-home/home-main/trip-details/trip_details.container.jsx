import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { Date } from "react-format";

const BASE_URL = "http://localhost:5000/trip/";
class TripDetails extends Component {
  constructor(props) {
    super(props);
    this.handleFAB = this.handleFAB.bind(this);
  }

  handleFAB() {
    this.props.history.push("/home/create/postcard");
  }

  render() {
    console.log("TripDetails this.props:", this.props);
    const { trips, details } = this.props;

    // if: no trip created yet, return text
    if (trips && trips.length === 0) {
      return (
        <h5 className="container section grey-text">
          Create a trip to start posting.
        </h5>
      );
    }

    let postcards =
      // if: no postcards created yet, render text
      details.postcards.length === 0 ? (
        <h5 className="container section grey-text">
          Start by creating a postcard.
        </h5>
      ) : (
        // else: render post cards
        details.postcards.map(postcard => {
          return (
            <div key={postcard._id} className="container card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={postcard.imageUrl} />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  {postcard.title}
                </span>
                <div className="row">
                  <span className="col">{postcard.location}</span>
                  <Date className="col">{postcard.date}</Date>
                </div>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  {postcard.title}
                  <i className="material-icons right">close</i>
                </span>
                <p className="flow-text">{postcard.body}</p>
              </div>
            </div>
          );
        })
      ); // end postcards

    // details view
    return (
      <div className="container">
        {/* trip title */}
        <h3 className="header section">{details.title}</h3>

        {/* shareable link */}
        <div className="row">
          <div className="col s1">
            <a className="col" href={BASE_URL + details._id}>
              <i className="col material-icons">link</i>
            </a>
          </div>
          <div className="col s11">{BASE_URL + details._id}</div>
        </div>

        {/* add post fab */}
        <div className="fixed-action-btn">
          <a onClick={this.handleFAB} className="btn-floating btn-large cyan">
            <i className="large material-icons">add</i>
          </a>
        </div>

        {/* post cards */}
        {postcards}
      </div>
    );
  } // end render()
} // end TripDetails

function mapStateToProps(store) {
  return {
    trips: store.homeReducer.user.trips,
    details: store.homeReducer.details
  };
}

export default withRouter(connect(mapStateToProps, null)(TripDetails));
