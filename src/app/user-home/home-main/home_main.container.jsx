import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// components
import Details from "./details.component.jsx";
import AddTrip from "./add_trip.component.jsx";
import AddPostcard from "./add_postcard.component.jsx";

class HomeMain extends Component {
  constructor(props) {
    super(props);
    console.log("HomeMain props:", props);
  }
  render() {
    const path = this.props.path;
    return (
      <main>
        <Switch>
          <Route exact path={`${path}/addTrip`} component={AddTrip} />
          <Route exact path={`${path}/addPostcard`} component={AddPostcard} />
          <Route exact path={path} component={Details} />
        </Switch>
      </main>
    );
  }
}

export default HomeMain;
