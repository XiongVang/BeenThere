import { updateObject } from "../utils.module.jsx";

// action types
import { AUTHENTICATION, USER_LOGIN, USER_LOGOUT } from "./auth.action.jsx";

export default function(state = { isAuthenticated: false }, action) {
  console.log("auth.reducer action:", action);
  console.log("auth.reducer state:", state);

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

  return state;
}
