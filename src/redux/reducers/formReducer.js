import { POST_IMAGE_ACTION, HANDLE_SUBMISSION_ACTION } from "../types/template";

const initialState = {
  imageURL: [],
  inventory: [],
};

const templateReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_SUBMISSION_ACTION:
      return {
        inventory: state.inventory.concat(...action.inventoryData),
      };
    case POST_IMAGE_ACTION:
      return {
        imageURL: state.imageURL.concat(...action.payload),
      };
    // case LOAD_LINK_SUCCESS_ACTION:
    //   return {
    //     linkList: state.linkList.concat(...action.payload),
    //   };
    // case CLEAR_LINK_ACTION:
    //   return {
    //     linkList: state.linkList.filter((item) => item.id !== action.payload),
    //   };
    default:
      return state;
  }
};

export default templateReducer;
