import { updateObject } from "../utils.module.jsx";

// actions
import { CREATE_TRIP, CREATE_POSTCARD } from "./home.action.jsx";
import {
  SET_TRIP_CREATED,
  SET_POSTCARD_CREATED
} from "./home_utils.action.jsx";

export default function(
  state = { tripCreated: false, postcardCreated: false },
  action
) {
  if (action.type === CREATE_TRIP) {
    return action.error
      ? updateObject(state, { tripCreated: false })
      : updateObject(state, { tripCreated: true });
  }

  if (action.type === SET_TRIP_CREATED) {
    return updateObject(state, { tripCreated: action.payload });
  }

  if (action.type === CREATE_POSTCARD) {
    return action.error
      ? updateObject(state, { postcardCreated: false })
      : updateObject(state, { postcardCreated: true });
  }

  if (action.type === SET_POSTCARD_CREATED) {
    return updateObject(state, { postcardCreated: action.payload });
  }

  return state;
}
