import { createStore, compose, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import formReducer from "./reducers/formReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  formReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);
