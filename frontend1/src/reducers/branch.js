import { GET_BRANCH } from "../actions/types";

const InitialState = {
  branch: []
};

export default function(state = InitialState, action) {
  switch (action.type) {
    case GET_BRANCH:
      return {
        ...state,
        branch: action.payload
      };
    default:
      return state;
  }
}
