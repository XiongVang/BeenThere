import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./landing.component.jsx";
import Register from "./register.component.jsx";
import Login from "./login.component.jsx";
import About from "./about.component.jsx";
import NoMatch from "./noMatch.component.jsx";

const Main = () => {
  return (
    <main className="w3-padding-16">
      <Switch>
        <Route exact path="/about" component={About} />
        <Route path="/newuser" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/:noMatch" component={NoMatch} />
        <Route path="/" component={Landing} />
      </Switch>
    </main>
  );
};

export default Main;
