import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingPage.component.jsx";
import RegisterPage from "../containers/registerPage.container.jsx";
import LoginPage from "../containers/loginPage.container.jsx";
import UserPage from "../containers/userPage.container.jsx";
import AboutPage from "./aboutPage.component.jsx";
import NoMatchPage from "./noMatchPage.component.jsx";

const Main = () => {
  return (
    <main className="w3-padding-16">
      <Switch>
        <Route exact path="/about" component={AboutPage} />
        <Route path="/newuser" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/userpage" component={UserPage} />
        <Route path="/:noMatch" component={NoMatchPage} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </main>
  );
};

export default Main;
