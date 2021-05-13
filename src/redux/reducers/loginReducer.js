import {
  LOGIN_FAILURE_ACTION,
  LOGIN_REQUEST_ACTION,
  LOGIN_SUCCESS_ACTION,
  LOGOUT_REQUEST_ACTION,
  LOGIN_USER_TYPE,
} from "../types/template";

const initialState = {
  isLoading: false,
  isAuthenticated: false || localStorage.getItem("token") != null,
  // isBuyer: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST_ACTION:
      return Object.assign({}, state, {
        isLoading: true,
        isAuthenticated: false,
        // isBuyer: false,
      });
    case LOGIN_SUCCESS_ACTION:
      return { ...state, isAuthenticated: true };

    case LOGIN_FAILURE_ACTION:
      return { ...state, isLoading: false };
    case LOGOUT_REQUEST_ACTION:
      // return Object.assign({}, state, {
      //   isLoading: false,
      //   isAuthenticated: false,
      //   isBuyer: false,
      // });
      return { ...state, isAuthenticated: false };
    case LOGIN_USER_TYPE:
      return Object.assign({}, state, {
        isLoading: false,
        isAuthenticated: true,
        // isBuyer: true,
      });
    default:
      return state;
  }
};

export default loginReducer;
