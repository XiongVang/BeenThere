import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

// reducers
import utilsReducer from "./utils.reducer.jsx";
import authReducer from "./auth.reducer.jsx";
import userReducer from "./user.reducer.jsx";

export default combineReducers({
  form,
  utilsReducer,
  authReducer,
  userReducer
});
