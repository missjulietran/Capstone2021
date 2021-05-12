import axios from "axios";
import dotenv from "dotenv";
import {
  LOGIN_FAILURE_ACTION,
  LOGIN_REQUEST_ACTION,
  LOGIN_SUCCESS_ACTION,
  LOGOUT_REQUEST_ACTION,
  LOGIN_USER_TYPE,
} from "../types/template";
import dotenv from "dotenv";

dotenv.config()

dotenv.config();

export const logoutUserThunk = (dispatch) => {
  try {
    dispatch({ type: LOGOUT_REQUEST_ACTION });
  } catch (err) {
    console.log("Error", err);
  }
};

export const loginBuyerThunk = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST_ACTION });

    const response = await axios.post(
      `${process.env.REACT_APP_API_SERVER}/login/buyer`,
      {
        email: email,
        password: password,
      }
    );

    const { data } = response;
    if (data == null) {
      dispatch({ type: LOGIN_FAILURE_ACTION, message: "Unknown Error" });
    } else if (!data.token) {
      dispatch({ type: LOGIN_FAILURE_ACTION, message: data.message || "" });
    } else {
      localStorage.setItem("token", data.token);

      // if (data.buyer === true) {
      dispatch({ type: LOGIN_USER_TYPE });
      // }
    }
  } catch (err) {
    console.log("Error:", err);
  }
};

export const loginUserThunk = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST_ACTION });

    const response = await axios.post(
      `${process.env.REACT_APP_API_SERVER}/login/seller`,
      {
        email: email,
        password: password,
      }
    );

    const { data } = response;
    if (data == null) {
      dispatch({ type: LOGIN_FAILURE_ACTION, message: "Unknown Error" });
    } else if (!data.token) {
      dispatch({ type: LOGIN_FAILURE_ACTION, message: data.message || "" });
    } else {
      localStorage.setItem("token", data.token);
      dispatch({ type: LOGIN_SUCCESS_ACTION });
    }
  } catch (err) {
    console.log("Error:", err);
  }
};
