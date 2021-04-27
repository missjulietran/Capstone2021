import axios from "axios";
import { POST_IMAGE_ACTION, HANDLE_SUBMISSION_ACTION } from "../types/template";

export function handleSubmissionAction({
  name,
  category,
  sku,
  quantity,
  units,
  price,
  best_before_date,
  descriptions,
  image,
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
      image,
    },
  };
}
export const handleSubmissionThunk = (inventoryData) => {
  return async (dispatch) => {
    try {
      await axios.post(`http://localhost:8080/upload`, inventoryData);
      // dispatch(postImageAction(data));
    } catch (err) {
      console.log("handle", err);
    }
  };
};
// export function postImageAction(image) {
//   return {
//     type: POST_IMAGE_ACTION,
//     payload: image,
//   };
// }

// export const postImageThunk = (data) => {
//   return async (dispatch) => {
//     try {
//       await axios.post(`http://localhost:8080/uploadImage`, data);
//       // dispatch(postImageAction(data));
//     } catch (err) {
//       console.log(err);
//     }
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
