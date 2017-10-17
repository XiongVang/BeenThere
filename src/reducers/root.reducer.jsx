import { combineReducers } from 'redux';

// reducers
import authReducer from './auth.reducer.jsx';

export default combineReducers({
    auth: authReducer
});