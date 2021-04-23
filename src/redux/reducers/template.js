// const initialState = {
//   linkList: [],
// };

// const linkReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_LINK_ACTION:
//       return {
//         linkList: state.linkList.concat(action.link),
//       };
//     case LOAD_LINK_SUCCESS_ACTION:
//       return {
//         linkList: state.linkList.concat(...action.payload),
//       };
//     case CLEAR_LINK_ACTION:
//       return {
//         linkList: state.linkList.filter((item) => item.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// };

// export default linkReducer;
