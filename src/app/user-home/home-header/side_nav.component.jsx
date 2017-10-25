import React from "react";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";

const SideNav = props => {
  const side_nav_styles = {
    width: 200
  };

  const add_trip_fab_styles = {
    paddingRight: 10,
    paddingTop: 12
  };

  const { handleCreateTripButton, handleLogout, user } = props;

  const tripTitles = user.trips ? (
    user.trips.map(trip => {
      return (
        <li key={trip._id}>
          <a className="waves-effect" href="#">
            {trip.title}
          </a>
        </li>
      );
    })
  ) : (
    <div />
  );

  return (
    <ul
      style={side_nav_styles}
      id="slide-out"
      className=".home-side-nav side-nav fixed"
    >
      {/* user profile */}
      <li>
        <div className="user-view">
          <div className="background">
            <img className="responsive-img" src="img/drone-beach.jpg" />
          </div>
          <div className="center">
            <img className="circle" src="img/yuna.jpg" />
          </div>
          <div>
            <span className="white-text name">
              {user.username ? user.username : "<username>"}
            </span>
          </div>
        </div>
      </li>

      {/* log out */}
      <li>
        <a onClick={handleLogout} className="waves-effect waves-light btn-flat">
          Logout
        </a>
      </li>

      <li>
        <div className="divider" />
      </li>

      {/* add new trip */}
      <li>
        <div style={add_trip_fab_styles}>
          <a
            onClick={handleCreateTripButton}
            className="right btn-flat waves-effect waves-light"
          >
            <i className="large material-icons center">add_circle</i>
          </a>
        </div>
      </li>

      {/* trips subheader */}
      <li className="row">
        <a className="subheader">Trips</a>
      </li>

      {/* list of trips */}
      {tripTitles}
    </ul>
  );
};

SideNav.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  user: PropTypes.object
};

export default SideNav;
