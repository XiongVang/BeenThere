import { REGISTER_USER } from "../actions/register.action.jsx";

export default function(state = {}, action) {
  console.log("register user action", action);
  let register = () => {
    if (action.payload.error) {
      console.log("user registration error:", action.payload);
      return Object.assign({}, state, {
        isRegistered: false
      });
    } else {
      console.log("user registeration success");
      return Object.assign({}, state, {
        isRegistered: true
      });
    }
  };

  switch (action.type) {
    case REGISTER_USER:
      register();
      break;
  }

  return state;
}
