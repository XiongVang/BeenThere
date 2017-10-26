import React, { Component } from "react";
import PropTypes from "prop-types";

import TitleListItem from "./title_list_item.component.jsx";

class SideNav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const side_nav_styles = {
      width: 200
    };

    const add_trip_fab_styles = {
      paddingRight: 10,
      paddingTop: 12
    };

    const {
      user,
      handleCreateButton,
      handleLogout,
      handleTitleClick
    } = this.props;

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
                {user.name ? user.name : "<name>"}
              </span>
              <span className="white-text email">
                {user.username ? user.username : "<username>"}
              </span>
            </div>
          </div>
        </li>

        {/* log out */}
        <li>
          <a
            onClick={handleLogout}
            className="waves-effect waves-light btn-flat"
          >
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
              onClick={handleCreateButton}
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
        {user.trips ? (
          user.trips.map(trip => {
            return (
              <TitleListItem
                key={trip._id}
                trip={trip}
                handleTitleClick={handleTitleClick}
              />
            );
          })
        ) : (
          <div />
        )}
      </ul>
    );
  }
}

SideNav.propTypes = {
  handleLogout: PropTypes.func,
  handleCreateButton: PropTypes.func,
  handleTitleClick: PropTypes.func,
  user: PropTypes.object
};

export default SideNav;
