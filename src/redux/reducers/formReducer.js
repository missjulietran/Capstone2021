import {
  HANDLE_EVENT_SUBMISSION_ACTION,
  GET_INVENTORY_ACTION,
  GET_SINGLE_ITEM_ACTION,
  UPDATE_INVENTORY_ACTION,
  DEL_PRODUCT_ACTION,
} from "../types/template";

const initialState = {
  imageURL: [],
  inventory: [],
  event: [],
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

    default:
      return state;
  }
};

export default formReducer;
