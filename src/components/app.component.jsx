import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./header.component.jsx";
import Footer from "./footer.component.jsx";
import Main from "./main.component.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
