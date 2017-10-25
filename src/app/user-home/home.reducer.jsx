import { updateObject } from "../utils.module.jsx";

// action types
import { FETCH_USER } from "./home.action.jsx";

export default function(state = { user: {} }, action) {
  if (action.type === FETCH_USER) {
    return updateObject(state, { user: action.payload.data });
  }

  return state;
}
