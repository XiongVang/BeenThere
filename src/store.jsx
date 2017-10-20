// react
import React from "react";
import ReactDOM from "react-dom";

// redux
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";

import App from "./app/app.component.jsx";
import reducers from "./reducers/combineReducers.jsx";

const store = applyMiddleware(promise)(createStore)(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
