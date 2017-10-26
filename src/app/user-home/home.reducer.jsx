import { updateObject, findById } from "../utils.module.jsx";

// action types
import { FETCH_USER, SET_DETAILS } from "./home.action.jsx";

export default (
  state = { user: {}, details: { title: "", postcards: [] } },
  action
) => {
  if (action.type === FETCH_USER) {
    return updateObject(state, {
      user: action.payload.data,
      details: action.payload.data.trips[0]
    });
  }

  if (action.type === SET_DETAILS) {
    let id = action.payload;

    let details = state.user.trips.find(trip => trip._id == id);

    return updateObject(state, {
      details: details
    });
  }

  return state;
};
