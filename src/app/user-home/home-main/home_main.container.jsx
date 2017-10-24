import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// components
import TripDetails from "./trip-details/trip_details.container.jsx";
import CreateTrip from "./create-trip/create_trip.container.jsx";
import CreatePostcard from "./create-postcard/create_postcard.container.jsx";

const HomeMain = props => {
  return (
    <main>
      <Switch>
        <Route
          exact
          path={`${props.path}/create/trip`}
          component={CreateTrip}
        />
        <Route
          exact
          path={`${props.path}/create/postcard`}
          component={CreatePostcard}
        />
        <Route path="*" component={TripDetails} />
      </Switch>
    </main>
  );
};

export default HomeMain;
