import axios from "axios";

export const updateBuyerThunk = (data) => {
  const user = localStorage.getItem("token");

  return (dispatch) => {
    return axios
      .put(`http://localhost:8080/buyerDashboard`, data, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((data) => {
        alert("Thank you! Your information is updated!");
        if (data.data === "updated") {
          window.location = "/buyerdashboard";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
