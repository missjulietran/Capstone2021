import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const updateBuyerThunk = (data) => {
  const user = localStorage.getItem("token");

  return (dispatch) => {
    return axios
      .put(`${process.env.REACT_APP_API_SERVER}/buyerDashboard`, data, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((data) => {
        alert("Thank you! Your information is updated!");
        if (data.data === "updated") {
          window.location = "/buyer/buyerdashboard";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
