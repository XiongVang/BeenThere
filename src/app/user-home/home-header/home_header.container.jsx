import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

// components
import Logo from "./logo.component.jsx";
import SideNav from "./side_nav.component.jsx";

// actions
import { logout } from "../../auth/auth.action.jsx";
import { fetchUser } from "../home.action.jsx";

class HomeHeader extends Component {
  constructor(props) {
    super(props);
    this.handleCreateTripButton = this.handleCreateTripButton.bind(this);

    console.log("HomeHeader props:", props);
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  handleCreateTripButton(event) {
    console.log("!!! handleCreateTripButton !!!", this.props);
    event.preventDefault();
    this.props.history.push("/home/create/trip");
  }
  render() {
    const { logout, user } = this.props;
    return (
      <header>
        <Logo />
        <SideNav
          user={user}
          handleLogout={logout}
          handleCreateTripButton={this.handleCreateTripButton}
        />
      </header>
    );
  }
}

function mapStateToProps(store) {
  return { user: store.homeReducer.user };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser, logout }, dispatch);
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeHeader)
);
