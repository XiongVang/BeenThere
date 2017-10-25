import React, { Component } from "react";

export default class TitleListItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleTitleClick(this.props.trip._id);
  }
  render() {
    const { trip } = this.props;
    return (
      <li onClick={this.handleClick}>
        <a className="waves-effect" href="#">
          {trip.title}
        </a>
      </li>
    );
  }
}
