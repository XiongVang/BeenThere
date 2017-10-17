import React, { Component } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="w3-container w3-teal w3-row">
        <h1 className="w3-left">BeenThere</h1>
        <button className="w3-button w3-right"><Link to="/login">Login</Link></button>
      </div>
    </header>
  );
};

export default Header;
