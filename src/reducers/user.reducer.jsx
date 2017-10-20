import _ from "lodash";
import { USER_LOGIN } from "../actions/auth.actions.jsx";

export default function(state = {}, action) {
  console.log("user.reducer action:", action);
  console.log("user.reducer state:", state);

  switch (action.type) {
    case USER_LOGIN:
      return action.error ? state : _.assign(state, action.payload.data);
      break;
  }

  return state;
}
