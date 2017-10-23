import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";

const SideNav = ({ trips = [] }) => {
  const side_nav_styles = {
    width: 200
  };

  const add_trip_fab_styles = {
    paddingRight: 10,
    paddingTop: 12
  };

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
            <span className="white-text name">{"<username>"}</span>
          </div>
        </div>
      </li>

      {/* log user out */}
      <li>
        <a className="waves-effect waves-light btn-flat">Logout</a>
      </li>

      <li>
        <div className="divider" />
      </li>

      {/* add new trip */}
      <li>
        <div style={add_trip_fab_styles}>
          <button className="right btn-flat waves-effect waves-light">
            <i className="large material-icons center">add_circle</i>
          </button>
        </div>
      </li>

      {/* trips subheader */}
      <li className="row">
        <a className="subheader">Trips</a>
      </li>

      {/* list of trips */}
      <li>
        <a className="waves-effect" href="#">
          {"<trip title>"}
        </a>
      </li>
      <li>
        <a className="waves-effect" href="#">
          {"<trip title>"}
        </a>
      </li>
      <li>
        <a className="waves-effect" href="#">
          {"<trip title>"}
        </a>
      </li>
      <li>
        <a className="waves-effect" href="#">
          {"<trip title>"}
        </a>
      </li>
    </ul>
  );
};

SideNav.propTypes = {
  handleAddTrip: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  trips: PropTypes.array
};
export default SideNav;
