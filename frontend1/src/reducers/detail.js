import { GET_DETAIL } from "../actions/types";

const InitialState = {
  detail: []
};

export default function(state = InitialState, action) {
  switch (action.type) {
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload
      };
    default:
      return state;
  }
}
