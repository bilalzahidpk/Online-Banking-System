import { FUNDS_TRANSFER } from "../actions/types";

const InitialState = {
  transaction: "",
};

export default function (state = InitialState, action) {
  switch (action.type) {
    case FUNDS_TRANSFER:
      return { ...state, transaction: action.payload };

    default:
      return state;
  }
}
