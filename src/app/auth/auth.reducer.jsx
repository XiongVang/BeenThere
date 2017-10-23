import { updateObject } from "../utils.module.jsx";

// action types
import { AUTHENTICATION, USER_LOGIN, USER_LOGOUT } from "./auth.actions.jsx";

export default function(state = { isAuthenticated: false }, action) {
  console.log("auth.reducer action:", action);
  console.log("auth.reducer state:", state);

  const isAuth = { isAuthenticated: true };
  const notAuth = { isAuthenticated: false };

  switch (action.type) {
    case AUTHENTICATION:
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
      return updateObject(state, notAuth);
      break;
  }

  return state;
}
