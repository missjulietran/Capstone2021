// import axios from "axios";
// import {
//   ADD_LINK_ACTION,
//   CLEAR_LINK_ACTION,
//   LOAD_LINK_SUCCESS_ACTION,
// } from "./addLinkTypes";

// export function addLinkAction({ name, url, tag }) {
//   return {
//     type: ADD_LINK_ACTION,
//     link: {
//       name,
//       url,
//       tag,
//     },
//   };
// }

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

// export const addLinkThunk = (obj) => {
//   return (dispatch) => {
//     axios
//       .post(`http://localhost:8080/link`, obj)
//       .then(() => {
//         dispatch(getLinkThunk());
//       })
//       .catch((err) => {
//         console.log(err);
//       });
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
