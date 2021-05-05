import {
  HANDLE_EVENT_SUBMISSION_ACTION,
  GET_INVENTORY_ACTION,
  GET_SINGLE_ITEM_ACTION,
  UPDATE_INVENTORY_ACTION,
  DEL_PRODUCT_ACTION,
  SIGN_IN_FORM_SUBMIT_ACTION,
} from "../types/template";

const initialState = {
  imageURL: [],
  inventory: [],
  event: [],
  // certOfInfo: [],
  // businessCert: [],
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case DEL_PRODUCT_ACTION:
      return {
        inventory: state.inventory.filter((item) => item.id !== action.payload),
      };

      case SIGN_IN_FORM_SUBMIT_ACTION:
        return{
          event: state.event.concat(...action.payload)
        }
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
