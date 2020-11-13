import { DEPOSIT_TRANSACTION, WITHDRAWL_TRANSACTION } from "../actions/types";

const InitialState = {
  transaction: "",
};

export default function (state = InitialState, action) {
  switch (action.type) {
    case DEPOSIT_TRANSACTION:
      return { ...state, transaction: action.payload };

    case WITHDRAWL_TRANSACTION:
      return { ...state, transaction: action.payload };

    default:
      return state;
  }
}
