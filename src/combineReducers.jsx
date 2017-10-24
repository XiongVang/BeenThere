import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

// reducers
import authReducer from "./app/auth/auth.reducer.jsx";
import authUtilsReducer from "./app/auth/auth_utils.reducer.jsx";
import homeReducer from "./app/user-home/home.reducer.jsx";
import homeUtilsReducer from "./app/user-home/home_utils.reducer.jsx";

export default combineReducers({
  form,
  authUtilsReducer,
  authReducer,
  homeReducer,
  homeUtilsReducer
});
