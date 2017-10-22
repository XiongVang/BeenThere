import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./home/home.container.jsx";
import Auth from "./auth/auth.component.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/" component={Auth} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
