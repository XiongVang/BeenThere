import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import UserHome from "./user-home/home.container.jsx";
import Auth from "./auth/auth.component.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={UserHome} />
        <Route path="/" component={Auth} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
