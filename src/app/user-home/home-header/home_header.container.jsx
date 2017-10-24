import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

// components
import Logo from "./logo.component.jsx";
import SideNav from "./side_nav.component.jsx";

// actions
import { logout } from "../../auth/auth.action.jsx";

class HomeHeader extends Component {
  constructor(props) {
    super(props);

    this.handleCreateTripButton = this.handleCreateTripButton.bind(this);
  }

  handleCreateTripButton(event) {
    console.log("!!! handleCreateTripButton !!!", this.props);
    event.preventDefault();
    this.props.history.push("/home/create/trip");
  }
  render() {
    const { logout, username } = this.props;
    return (
      <header>
        <Logo />
        <SideNav
          username={username}
          handleLogout={logout}
          handleCreateTripButton={this.handleCreateTripButton}
        />
      </header>
    );
  }
}

function mapStateToProps(store) {
  return { username: store.authReducer.username };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logout }, dispatch);
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeHeader)
);
