import axios from "axios";
import dotenv from "dotenv";
import {
  HANDLE_EVENT_SUBMISSION_ACTION,
  GET_INVENTORY_ACTION,
  GET_SINGLE_ITEM_ACTION,
  DEL_PRODUCT_ACTION,
} from "../types/template";

dotenv.config();
// INVENTORY
export const getInventoryAction = (items) => {
  return {
    type: GET_INVENTORY_ACTION,
    payload: items,
  };
};

export const getSingleItemAction = (item) => {
  console.log("get single item", item);
  return {
    type: GET_SINGLE_ITEM_ACTION,
    payload: item,
  };
};

export function delProductAction(id) {
  return {
    type: DEL_PRODUCT_ACTION,
    payload: id,
  };
}
export const getInventoryThunk = () => {
  const user = localStorage.getItem("token");
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_SERVER}/data/getInventoryData`, {
        headers: { Authorization: `Bearer ${user}` },
      }) //USERID
      .then((data) => {
        dispatch(getInventoryAction(data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const handleInventorySubmissionThunk = (data, inventoryData) => {
  const user = localStorage.getItem("token");

  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_API_SERVER}/data/uploadImage`, data, {
        headers: { Authorization: `Bearer ${user}` },
      }) //URL
      .then(() => {
        return axios
          .post(
            `${process.env.REACT_APP_API_SERVER}/data/upload`,
            inventoryData,
            {
              headers: { Authorization: `Bearer ${user}` },
            }
          ) //USERID
          .then((data) => {
            alert("Thank you! Your form was submitted successfully");
            if (data.data === "updated") {
              window.location = "/Sellerproduct";
            }
          })
          .catch((err) => {
            alert("The sku number already exist");
            console.log(err);
          });
      })
      .then(() => console.log("update inventory done"))
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateInventoryThunk = (data, inventoryData) => {
  const user = localStorage.getItem("token");
  return (dispatch) => {
    if (!data === undefined) {
      return axios
        .post(`${process.env.REACT_APP_API_SERVER}/data/uploadImage`, data, {
          headers: { Authorization: `Bearer ${user}` },
        }) //URL
        .then((data) => {
          return axios
            .put(
              `${process.env.REACT_APP_API_SERVER}/data/${inventoryData.id}`,
              inventoryData,
              {
                headers: { Authorization: `Bearer ${user}` },
              }
            ) //USERID
            .then((data) => {
              alert("Thank you! Your product was updated successfully");
              if (data.data === "updated") {
                window.location = "/Sellerproduct";
              }
            })
            .catch((err) => {
              alert("The sku number already exist");
              console.log(err);
            });
        })
        .then(() => {
          console.log("uploaded done");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return axios
        .put(
          `${process.env.REACT_APP_API_SERVER}/data/update/${inventoryData.id}`,
          inventoryData,
          {
            headers: { Authorization: `Bearer ${user}` },
          }
        ) //USERID
        .then((data) => {
          alert("Thank you! Your product was updated successfully");
          if (data.data === "updated") {
            window.location = "/Sellerproduct";
          }
        })
        .catch((err) => {
          alert("The sku number already exist");
          console.log(err);
        });
    }
  };
};
export const delProductThunk = (itemid) => {
  const user = localStorage.getItem("token");
  return (dispatch) => {
    axios
      .delete(`${process.env.REACT_APP_API_SERVER}/data/delProduct/${itemid}`, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then(() => {
        dispatch(delProductAction(itemid));
        window.location = "/Sellerproduct";
      })

      .catch((err) => console.log(err));
  };
};

// EVENT
export function handleEventSubmissionAction({ title, start, end }) {
  return {
    type: HANDLE_EVENT_SUBMISSION_ACTION,
    date: { title, start, end },
  };
}
export const handleEventSubmissionThunk = (data, eventData) => {
  const user = localStorage.getItem("token");

  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_API_SERVER}/data/uploadImage`, data, {
        headers: { Authorization: `Bearer ${user}` },
      }) //URL
      .then((data) => {
        return axios
          .post(
            `${process.env.REACT_APP_API_SERVER}/data/uploadEvent`,
            eventData,
            {
              headers: { Authorization: `Bearer ${user}` },
            }
          ) //USERID
          .then(() => {
            console.log("event done");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .then(() => {
        console.log("uploaded done");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// INFORMATION
export const updateInformationThunk = (userData) => {
  const user = localStorage.getItem("token");

  return (dispatch) => {
    return axios
      .post(
        `${process.env.REACT_APP_API_SERVER}/data/password`,
        userData.password,
        {
          headers: { Authorization: `Bearer ${user}` },
        }
      )
      .then((data) => {
        console.log("password", data);
        return axios
          .put(
            `${process.env.REACT_APP_API_SERVER}/data/updateUser`,
            userData,
            {
              headers: { Authorization: `Bearer ${user}` },
            }
          ) //USERID
          .then((data) => {
            console.log(data);
            if (data.data === "updated") {
              window.location = "/SellerDashBoard";
            }
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .then(() => console.log("update user done"))
      .catch((err) => console.log(err));
  };
};
