import { updateObject } from "../utils.module.jsx";

// actions
import { REGISTER_USER } from "./auth.action.jsx";
import { SET_IS_REGISTERED } from "./auth_utils.action.jsx";

export default function(state = {}, action) {

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
