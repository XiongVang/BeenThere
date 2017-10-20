import _ from "lodash";
import {
  AUTHENTICATE,
  USER_LOGIN,
  USER_LOGOUT
} from "../actions/auth.actions.jsx";

export default function(state = {}, action) {
  console.log("auth.reducer action:", action);
  console.log("auth.reducer state:", state);

  const isAuth = { isAuthenticated: true };
  const notAuth = { isAuthenticated: false };

  switch (action.type) {
    case AUTHENTICATE:
      return action.error
        ? _.assign(state, notAuth)
        : _.assign(state, isAuth);
      break;
    case USER_LOGIN:
      return action.error
        ? _.assign(state, notAuth)
        : _.assign(state, isAuth);
      break;
    case USER_LOGOUT:
      return action.error
        ? _.assign(state, isAuth)
        : _.assign(state, notAuth);
      break;
  }

  return state;
}
