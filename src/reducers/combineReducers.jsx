import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

// reducers
import registerReducer from "./register.reducer.jsx";
import authReducer from "./auth.reducer.jsx";
import userReducer from "./user.reducer.jsx";

export default combineReducers({
  form: formReducer,
  register: registerReducer,
  auth: authReducer,
  user: userReducer
});
