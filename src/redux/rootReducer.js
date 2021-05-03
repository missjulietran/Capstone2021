import { combineReducers } from "redux";
import formReducer from "./reducers/formReducer";
import loginReducer from "./reducers/loginReducer";

const rootReducer = combineReducers({
  form: formReducer,
  login: loginReducer,
});

export default rootReducer;
