import { updateObject } from "./reducer.utils.jsx";
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
        ? updateObject(state, notAuth)
        : updateObject(state, isAuth);
      break;
    case USER_LOGIN:
      return action.error
        ? updateObject(state, notAuth)
        : updateObject(state, isAuth);
      break;
    case USER_LOGOUT:
      return action.error
        ? updateObject(state, isAuth)
        : updateObject(state, notAuth);
      break;
  }

  return state;
}
