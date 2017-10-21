import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import LandingContainer from "./landing/landing.container.jsx";
import RegisterContainer from "./register/register.container.jsx";
import LoginContainer from "./login/login.container.jsx";
import UserContainer from "./user/user.container.jsx";
import About from "./about/about.component.jsx";
import NoMatch from "./error/error.component.jsx";

const Main = () => {

  return (
    <main>
      <div>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route path="/newuser" component={RegisterContainer} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/home" component={UserContainer} />
          <Route path="/:noMatch" component={NoMatch} />
          <Route path="/" component={LandingContainer} />
        </Switch>
      </div>
    </main>
  );
};

export default Main;
