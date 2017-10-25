import { updateObject } from "../utils.module.jsx";

// actions
import { CREATE_TRIP } from "./home.action.jsx";
import { SET_TRIP_CREATED } from "./home_utils.action.jsx";

export default (state = { tripCreated: false }, action) => {

  const tripHasBeenCreated = { tripCreated: true };
  const tripNotAdded = { tripCreated: false };

  switch (action.type) {
    case CREATE_TRIP:
      return action.error
        ? updateObject(state, tripNotAdded)
        : updateObject(state, tripHasBeenCreated);
      break;
    case SET_TRIP_CREATED:
      return updateObject(state, { tripCreated: action.payload });
      break;
  }

  return state;
};
