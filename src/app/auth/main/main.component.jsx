import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import TripContainer from "./trip/trip.container.jsx";
import Landing from "./landing/landing.component.jsx";
import RegisterContainer from "./register/register.container.jsx";
import LoginContainer from "./login/login.container.jsx";
import About from "./about/about.component.jsx";
import NoMatch from "./error/error.component.jsx";

const Main = () => {
  return (
    <main>
      <div>
        <Switch>
          <Route exact path="/trip/:id" component={TripContainer} />
          <Route exact path="/about" component={About} />
          <Route exact path="/register" component={RegisterContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route path="/:noMatch" component={NoMatch} />
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    </main>
  );
};

export default Main;
