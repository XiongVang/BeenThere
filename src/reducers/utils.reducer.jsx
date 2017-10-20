import { updateObject } from "./utils.module.jsx";
import { REGISTER_USER } from "../actions/auth.actions.jsx";
import { SET_IS_REGISTERED } from "../actions/util.actions.jsx";

export default function(state = {}, action) {
  console.log("register.reducer action:", action);
  console.log("register.reducer state:", state);

  const isReg = { isRegistered: true };
  const notReg = { isRegistered: false };

  switch (action.type) {
    case REGISTER_USER:
      return action.error
        ? updateObject(state, notReg)
        : updateObject(state, isReg);
      break;
    case SET_IS_REGISTERED:
      return updateObject(state, { isRegistered: action.payload });
      break;
  }

  return state;
}
