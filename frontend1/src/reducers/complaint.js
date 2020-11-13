import { ADD_COMPLAINT } from "../actions/types";

const InitialState = {
  message: "",
};

export default function (state = InitialState, action) {
  switch (action.type) {
    case ADD_COMPLAINT:
      return { ...state, message: action.payload };
    default:
      return state;
  }
}
