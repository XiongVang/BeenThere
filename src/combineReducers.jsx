import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

// reducers
import authUtilsReducer from "./app/auth/authUtils.reducer.jsx";
import authReducer from "./app/auth/auth.reducer.jsx";
import homeReducer from "./app/home/home.reducer.jsx";

export default combineReducers({
  form,
  authUtilsReducer,
  authReducer,
  homeReducer
});
