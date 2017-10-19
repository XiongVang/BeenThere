import { LOGIN_USER } from "../actions/login.action.jsx";
import { LOGOUT_USER } from "../actions/logout.action.jsx";

export default function(state = { isAuthenticated: false }, action) {
  console.log("login state", state);

  switch (action.type) {
    case LOGIN_USER:
      return action.payload.error
        ? state
        : Object.assign({}, state, {
            isAuthenticated: true
          });
      break;
    case LOGOUT_USER:
      return action.payload.error
        ? state
        : Object.assign({}, state, {
            isAuthenticated: false
          });
      break;
  }

  return state;
}
