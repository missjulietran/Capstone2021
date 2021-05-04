import axios from "axios";
import {
  LOGIN_FAILURE_ACTION,
  LOGIN_REQUEST_ACTION,
  LOGIN_SUCCESS_ACTION,
  LOGOUT_REQUEST_ACTION,
} from "../types/template";

export const logoutUserThunk = (dispatch) => {
  try {
    dispatch({ type: LOGOUT_REQUEST_ACTION });
  } catch (err) {
    console.log("Error", err);
  }
};

export const loginUserThunk = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST_ACTION });

    const response = await axios.post("http://localhost:8080/api/sellerlogin", {
      email: email,
      password: password,
    });

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
