import { createStore, compose, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import templateReducer from "./reducers/templateReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  templateReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);
