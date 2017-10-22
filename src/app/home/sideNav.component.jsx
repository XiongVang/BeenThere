import React from "react";
import { Link } from "react-router";

const SideNav = props => {
  return (
    <ul id="slide-out" className=".home-side-nav side-nav fixed">
      {/* user profile */}
      <li>
        <div className="user-view">
          <div className="background">
            <img src="img/drone-beach.jpg" />
          </div>
          <div>
            <img className="circle" src="img/yuna.jpg" />
          </div>
          <div>
            <span className="white-text name">{"<username>"}</span>
          </div>
        </div>
      </li>

      {/* log user out */}
      <li>
        <a class="waves-effect waves-light btn-flat">Logout</a>
      </li>

      <li>
        <div className="divider" />
      </li>

      {/* add new trip */}
      <li>
        <div className="add-trip-fab">
          <button className="right btn-floating waves-effect waves-light cyan">
            <i className="material-icons center">add</i>
          </button>
        </div>
      </li>

      {/* trips subheader */}
      <li>
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

export default SideNav;
