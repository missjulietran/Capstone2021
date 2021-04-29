import {
  POST_IMAGE_ACTION,
  HANDLE_SUBMISSION_ACTION,
  HANDLE_EVENT_SUBMISSION_ACTION,
  GET_INVENTORY_ACTION,
  GET_SINGLE_ITEM_ACTION,
  UPDATE_INVENTORY_ACTION,
} from "../types/template";

const initialState = {
  imageURL: [],
  inventory: [],
  event: [],
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_SUBMISSION_ACTION:
      return {
        inventory: state.inventory.concat(...action.inventoryData),
      };
    case POST_IMAGE_ACTION:
      return {
        imageURL: state.imageURL.concat(...action.payload),
      };
    case HANDLE_EVENT_SUBMISSION_ACTION:
      return {
        event: state.event.concat(...action.date),
      };
    case GET_INVENTORY_ACTION:
      return {
        inventory: state.inventory.concat(...action.payload),
      };
    case GET_SINGLE_ITEM_ACTION:
      return {
        inventory: state.inventory.concat(...action.payload),
      };
    case UPDATE_INVENTORY_ACTION:
      return {
        inventory: state.inventory.concat(...action.payload),
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

export default formReducer;
