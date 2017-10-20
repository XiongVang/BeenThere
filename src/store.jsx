// react
import React from "react";
import ReactDOM from "react-dom";

// redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";

// react-router
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from "react-router-redux";
import createHistory from "history/createBrowserHistory";

import App from "./app/app.component.jsx";
import reducers from "./reducers/combineReducers.jsx";

const history = createHistory();
const historyMiddleware = routerMiddleware(history);

const store = applyMiddleware(historyMiddleware, promise)(createStore)(
  reducers
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.querySelector("#root")
);
