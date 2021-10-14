import { SETNAME } from "../actions/nameActions";

export const initialState = {
  name: ["Marcin"],
  age: 22,
};

export const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETNAME:
      return {
        ...state,
        name: [...state.name, action.payload],
      };
    default:
      return state;
  }
};
