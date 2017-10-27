import { updateObject } from "../utils.module.jsx";

// action types
import {
  AUTHENTICATION,
  USER_LOGIN,
  USER_LOGOUT,
  FETCH_TRIP
} from "./auth.action.jsx";

export default function(state = { isAuthenticated: false }, action) {
  const isAuth = { isAuthenticated: true };
  const notAuth = { isAuthenticated: false };

  if (action.type === AUTHENTICATION) {
    return action.error
      ? updateObject(state, notAuth)
      : updateObject(state, isAuth);
  }

  if (action.type === USER_LOGIN) {
    return action.error
      ? updateObject(state, notAuth)
      : updateObject(state, isAuth);
  }

  if (action.type === USER_LOGOUT) {
    return updateObject(state, notAuth);
  }

  if (action.type === FETCH_TRIP) {
    return updateObject(state, { trip: action.payload.data });
  }

  return state;
}
