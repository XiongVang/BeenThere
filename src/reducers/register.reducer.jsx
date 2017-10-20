import _ from "lodash";
import { REGISTER_USER } from "../actions/auth.actions.jsx";
import { SET_IS_REGESTERED } from "../actions/util.actions.jsx";

export default function(state = {}, action) {
  console.log("register.reducer action:", action);
  console.log("register.reducer state:", state);

  const isReg = { isRegistered: true };
  const notReg = { isRegistered: false };

  switch (action.type) {
    case REGISTER_USER:
      return action.error ? _.assign(state, notReg) : _.assign(state, isReg);
      break;
    case SET_IS_REGESTERED:
      return _.assign(state, { isRegistered: action.payload });
      break;
  }

  return state;
}
