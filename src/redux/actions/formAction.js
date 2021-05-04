import axios from "axios";
import {
  HANDLE_EVENT_SUBMISSION_ACTION,
  GET_INVENTORY_ACTION,
  GET_SINGLE_ITEM_ACTION,
  DEL_PRODUCT_ACTION,
} from "../types/template";

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
      .get("http://localhost:8080/getInventoryData", {
        headers: { Authorization: `Bearer ${user}` },
      }) //USERID
      .then((data) => {
        console.log(data);
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
      .post(`http://localhost:8080/uploadImage`, data, {
        headers: { Authorization: `Bearer ${user}` },
      }) //URL
      .then(() => {
        return axios
          .post(`http://localhost:8080/upload`, inventoryData, {
            headers: { Authorization: `Bearer ${user}` },
          }) //USERID
          .then((data) => {
            console.log("uploaded done", data);
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
        alert("Thank you! Your form was submitted successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateInventoryThunk = (data, inventoryData) => {
  const user = localStorage.getItem("token");
  return (dispatch) => {
    // console.log(data === undefined);
    // for (var pair of data.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }
    if (!data === undefined) {
      return axios
        .post(`http://localhost:8080/uploadImage`, data, {
          headers: { Authorization: `Bearer ${user}` },
        }) //URL
        .then((data) => {
          console.log("update", inventoryData);
          return axios
            .put(
              `http://localhost:8080/update/${inventoryData.id}`,
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
          `http://localhost:8080/update/${inventoryData.id}`,
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
export const delProductThunk = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:8080/delProduct/${id}`)
      .then(() => {
        console.log("del done");
        dispatch(delProductAction(id));
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
  return (dispatch) => {
    return axios
      .post(`http://localhost:8080/uploadImage`, data) //URL
      .then((data) => {
        console.log(data);
        console.log(eventData);
        return axios
          .post(`http://localhost:8080/uploadEvent/1`, eventData) //USERID
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
  return (dispatch) => {
    return axios
      .post(`http://localhost:8080/password`, userData.password)
      .then((data) => {
        console.log("password", data);
        return axios
          .put(`http://localhost:8080/updateUser/${userData.id}`, userData) //USERID
          .then((data) => {
            console.log(data);
            // if (data.data === "updated") {
            //   window.location = "/SellerDashBoard";
            // }
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .then(() => console.log("update user done"))
      .catch((err) => console.log(err));
  };
};
// axios
//   .post(`http://localhost:8080/uploadImage`, data)
//   .then((res) => {
//     //   dispatch(getLinkThunk());
//     console.log("post image", res.statusText);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//   };
// };

// export function clearLinkAction(id) {
//   return {
//     type: CLEAR_LINK_ACTION,
//     payload: id,
//   };
// }

// export const loadLinkSuccessAction = (links) => {
//   return {
//     type: LOAD_LINK_SUCCESS_ACTION,
//     payload: links,
//   };
// };

// export const getLinkThunk = () => {
//   return (dispatch) => {
//     return axios
//       .get("http://localhost:8080/")
//       .then((links) => {
//         console.log("getting", links);
//         dispatch(loadLinkSuccessAction(links.data));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };

// export const delLinkThunk = (id) => {
//   return (dispatch) => {
//     axios
//       .delete(`http://localhost:8080/${id}`)
//       .then(() => {
//         console.log("del done");
//         dispatch(clearLinkAction(id));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   return {
//     type: CLEAR_LINK_ACTION,
//     payload: id,
//   };
// };
