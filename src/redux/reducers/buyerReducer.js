import { GET_LATEST_ACTION } from "../types/template";

const initialState = {
  latest: [],
};

const buyerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LATEST_ACTION:
      return {
        latest: state.latest.concat(...action.payload),
      };

    default:
      return state;
  }
};

export default buyerReducer;
