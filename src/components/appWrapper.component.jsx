import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../containers/headerPartial.container.jsx";
import Footer from "./footerPartial.component.jsx";
import Main from "./mainWrapper.component.jsx";

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
