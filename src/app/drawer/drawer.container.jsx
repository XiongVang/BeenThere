import React, { Component } from "react";

class Drawer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="dw-s1" className="bmd-layout-drawer bg-faded">
        <header>
          <a className="navbar-brand">Title</a>
        </header>
        <ul className="list-group">
          <a className="list-group-item">Link 1</a>
          <a className="list-group-item">Link 2</a>
          <a className="list-group-item">Link 3</a>
        </ul>
      </div>
    );
  }
}

export default Drawer;
