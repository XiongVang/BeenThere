import React, { Component } from "react";
import { Date } from "react-format";

const TripShare = props => {
  console.log("inside TripShare props:", props);

  // if: trip does not exist, return text
  if (!props.trip) {
    return (
      <h5 className="section container">
        No match found, please check link and try again
      </h5>
    );
  }

  // render postcards
  const postcards =
    // if: no postcards created yet
    props.trip.postcards.length === 0 ? (
      <h5 className="section grey-text">
        The person you're following has not made posts yet, please check back
        soon.
      </h5>
    ) : (
      props.trip.postcards.map(postcard => {
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
    );

  return (
    <div className="container">
      {/* trip title */}
      <h4 className="header section">{props.trip.title}</h4>

      {/* post cards */}
      {postcards}
    </div>
  );
};

export default TripShare;
