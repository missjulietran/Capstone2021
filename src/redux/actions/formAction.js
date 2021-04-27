import axios from "axios";
import {
  POST_IMAGE_ACTION,
  HANDLE_SUBMISSION_ACTION,
  HANDLE_EVENT_SUBMISSION_ACTION,
} from "../types/template";

// INVENTORY
export function handleSubmissionAction({
  name,
  category,
  sku,
  quantity,
  units,
  price,
  best_before_date,
  descriptions,
}) {
  return {
    type: HANDLE_SUBMISSION_ACTION,
    inventoryData: {
      category,
      name,
      sku,
      quantity,
      units,
      price,
      best_before_date,
      descriptions,
    },
  };
}
export function postImageAction(image) {
  return {
    type: POST_IMAGE_ACTION,
    payload: image,
  };
}

export const postImageThunk = (data, inventoryData) => {
  return (dispatch) => {
    return axios
      .post(`http://localhost:8080/uploadImage`, data) //URL
      .then((data) => {
        console.log(data);
        console.log(inventoryData);
        return axios
          .post(`http://localhost:8080/upload`, inventoryData) //URL
          .then(() => {
            console.log("inventory done");
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

// EVENT
export function handleEventSubmissionAction({ start, end }) {
  return {
    type: HANDLE_EVENT_SUBMISSION_ACTION,
    date: { start, end },
  };
}
export const handleEventSubmissionThunk = (date) => {
  return (dispatch) => {
    return axios
      .post(`http://localhost:8080/upload`, date)
      .then(() => {
        console.log("inventory done");
      })
      .catch((err) => {
        console.log(err);
      });
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
