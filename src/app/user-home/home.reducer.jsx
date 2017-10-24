import { updateObject } from "../utils.module.jsx";

// action types
import { GET_USER } from "./home.action.jsx";

export default function(state = {}, action) {
  if (action.type === GET_USER) {
    return updateObject(state, { user: action.payload.data });
  }

  return state;
}
