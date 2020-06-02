import { combineReducers } from "redux";
import authReducer from "redux/reducers/auth.reducer";
import errorReducer from "redux/reducers/error.reducer";
const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer,
});
export default rootReducer;
