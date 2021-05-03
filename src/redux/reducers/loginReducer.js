import {
  LOGIN_FAILURE_ACTION,
  LOGIN_REQUEST_ACTION,
  LOGIN_SUCCESS_ACTION,
} from "../types/template";

const initialState = {
  isLoading: false,
  isAuthenticated: false || localStorage.getItem("token") != null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST_ACTION:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS_ACTION:
      return Object.assign({}, state, {
        isLoading: false,
        isAuthenticated: true,
      });
    case LOGIN_FAILURE_ACTION:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default loginReducer;
