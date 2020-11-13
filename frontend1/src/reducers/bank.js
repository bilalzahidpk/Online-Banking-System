import { GET_BANK } from "../actions/types";

const InitialState = {
  bank: []
};

export default function(state = InitialState, action) {
  switch (action.type) {
    case GET_BANK:
      return {
        ...state,
        bank: action.payload
      };
    default:
      return state;
  }
}
