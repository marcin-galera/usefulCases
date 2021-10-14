import { DECREMENT, INCREMENT, SET } from "../actions/counterActions";

export const initialState = { count: 221 };

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case SET:
      return {
        ...state,
        count: parseInt(action.payload, 10),
      };
    default:
      return state;
  }
};
