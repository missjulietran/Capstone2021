import axios from "axios";
import { GET_LATEST_ACTION } from "../types/template";

export const getLatestAction = (items) => {
  return { type: GET_LATEST_ACTION, payload: items };
};

export const getLatestThunk = () => {
  const user = localStorage.getItem("token");

  return (dispatch) => {
    return axios
      .get(`http://localhost:8080/buyerDashboard`, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((data) => {
        dispatch(getLatestAction(data.data));
      })
      .catch((err) => console.log(err));
  };
};
