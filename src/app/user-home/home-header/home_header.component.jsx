import React from "react";
import PropTypes from "prop-types";

// components
import Logo from "./logo.component.jsx";
import SideNav from "./side_nav.component.jsx";

const HomeHeader = props => {
  const { handleLogout } = props;
  return (
    <header>
      <Logo />
      <SideNav handleLogout={handleLogout} />
    </header>
  );
};

HomeHeader.propTypes = {
  handleLogout: PropTypes.func.isRequired
};

export default HomeHeader;
