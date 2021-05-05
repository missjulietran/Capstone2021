import { combineReducers } from "redux";
import formReducer from "./reducers/formReducer";
import loginReducer from "./reducers/loginReducer";
import buyerReducer from "./reducers/buyerReducer";

const rootReducer = combineReducers({
  form: formReducer,
  login: loginReducer,
  buyer: buyerReducer,
});

export default rootReducer;
