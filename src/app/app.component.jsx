import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./header/header.container.jsx";
import Drawer from "./drawer/drawer.container.jsx";
import Footer from "./footer/footer.component.jsx";
import Main from "./main/main.component.jsx";

const App = () => {
  const style = { position: "relative" };
  return (
    <BrowserRouter>
      <div
        style={style}
        className="bmd-layout-container bmd-drawer-f-l"
      >
        <Header />
        <Drawer />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
