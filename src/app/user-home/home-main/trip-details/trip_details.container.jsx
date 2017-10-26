import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { Card, CardTitle } from "react-materialize";

class TripDetails extends Component {
  constructor(props) {
    super(props);

    this.handleFAB = this.handleFAB.bind(this);
    console.log("TripDetails props:", props);
  }

  handleFAB() {
    this.props.history.push("/home/create/postcard");
  }

  render() {
    const { details } = this.props;

    const postcards = (
      <Card
        header={
          <CardTitle
            reveal
            image={
              "https://images.unsplash.com/photo-1494094892896-7f14a4433b7a?w=1950"
            }
            waves="light"
          />
        }
        title="Card Title"
        reveal={
          <p>
            Here is some more information about this product that is only
            revealed once clicked on.
          </p>
        }
      >
        <p>
          <a href="#">This is a link</a>
        </p>
      </Card>
    );

    return (
      <div className="container">
        <div className="header">{details.title}</div>

        {/* add post fab */}
        <div className="fixed-action-btn">
          <a onClick={this.handleFAB} className="btn-floating btn-large cyan">
            <i className="large material-icons">add</i>
          </a>
        </div>

        {/* post cards */}
        <div className="section row" />
      </div>
    );
  }
}

function mapStateToProps(store) {
  return { details: store.homeReducer.details };
}

export default withRouter(connect(mapStateToProps)(TripDetails));
