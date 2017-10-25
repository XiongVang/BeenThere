import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

// components
import Logo from "./logo.component.jsx";
import SideNav from "./side_nav.component.jsx";

// actions
import { logout } from "../../auth/auth.action.jsx";
import { fetchUser, setDetails } from "../home.action.jsx";

class HomeHeader extends Component {
  constructor(props) {
    super(props);
    this.handleCreateButton = this.handleCreateButton.bind(this);
    this.handleTitleClick = this.handleTitleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  handleCreateButton(event) {
    this.props.history.push("/home/create/trip");
  }

  handleTitleClick(tripId) {
    this.props.setDetails(tripId);
    this.props.history.push("/home");
  }

  render() {
    const { logout, user } = this.props;
    return (
      <header>
        <Logo />
        <SideNav
          user={user}
          handleLogout={logout}
          handleCreateButton={this.handleCreateButton}
          handleTitleClick={this.handleTitleClick}
        />
      </header>
    );
  }
}

function mapStateToProps(store) {
  return { user: store.homeReducer.user };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser, logout, setDetails }, dispatch);
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeHeader)
);
