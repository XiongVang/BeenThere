import { FETCH_USER } from "../actions/user.action.jsx";

export default function(state = {}, action) {

  switch (action.type) {
    case FETCH_USER:
      return Object.assign({}, state, {
        user: action.payload
      });
      break;
  }

  return state;
}
