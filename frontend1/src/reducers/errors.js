import { GET_ERRORS } from "../actions/types";

const InitialState = {
  message: {},
  status: null,
};

export default function (state = InitialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        message: action.payload.message,
        status: action.payload.status,
      };
    default:
      return state;
  }
}
