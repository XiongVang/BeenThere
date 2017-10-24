import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// components
import Details from "./details/details.container.jsx";
import AddTrip from "./add-trip/add_trip.container.jsx";
import AddPostcard from "./add-postcard/add_postcard.container.jsx";

const HomeMain = props => {
  return (
    <main>
      <Switch>
        <Route exact path={`${props.path}/addTrip`} component={AddTrip} />
        <Route
          exact
          path={`${props.path}/addPostcard`}
          component={AddPostcard}
        />
        <Route exact path={props.path} component={Details} />
      </Switch>
    </main>
  );
};

export default HomeMain;
