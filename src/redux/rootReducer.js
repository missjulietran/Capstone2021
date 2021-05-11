import { combineReducers } from "redux";
import formReducer from "./reducers/formReducer";
import loginReducer from "./reducers/loginReducer";
import buyerReducer from "./reducers/buyerReducer";
import cartReducer from './reducers/cartReducer';

const rootReducer = combineReducers({
  form: formReducer,
  login: loginReducer,
  buyer: buyerReducer,
  cart: cartReducer
});

export default rootReducer;
