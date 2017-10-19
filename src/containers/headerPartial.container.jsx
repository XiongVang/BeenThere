import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { logout } from "../actions/logout.action.jsx";

class Header extends Component {
  constructor(props) {
    super(props);
    this.buttonToggle = this.buttonToggle.bind(this);
  }

  buttonToggle() {
    return this.props.isAuthenticated ? (
      <button onClick={this.props.logout} className="w3-button w3-right">
        Logout
      </button>
    ) : (
      <button className="w3-button w3-right">
        <Link to="/login">Login</Link>
      </button>
    );
  }
  render() {
    return (
      <header className="w3-card-4">
        <div className="w3-container w3-teal w3-row">
          <h1 className="w3-left">BeenThere</h1>
          {this.buttonToggle()}
        </div>
      </header>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logout }, dispatch);
}

function mapStateToProps(store) {
  return { isAuthenticated: store.auth.isAuthenticated };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
