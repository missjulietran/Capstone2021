import axios from "axios";
import { LOGIN_FAILURE_ACTION, LOGIN_REQUEST_ACTION } from "../types/template";

export const loginUserThunk = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST_ACTION });
    const response = await axios.post("http://localhost:8080/api/sellerlogin", {
      email: email,
      password: password,
    });
    console.log("loginAction", response);
    const { data } = response;
    if (data == null) {
      dispatch({ type: LOGIN_FAILURE_ACTION, message: "Unknown Error" });
    } else if (!data.token) {
      dispatch({ type: LOGIN_FAILURE_ACTION, message: data.message || "" });
    } else {
      console.log("trying", data);
      localStorage.setItem("token", data.token);
    }
  } catch (err) {
    console.log("Error:", err);
  }
};
