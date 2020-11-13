import { GET_USER } from "../actions/types";

const InitialState = {
  user: []
};

export default function(state = InitialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
