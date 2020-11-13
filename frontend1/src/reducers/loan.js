import { ADD_LOAN, GOT_ACCOUNT, GOT_ACCOUNT_FAILED } from "../actions/types";

const InitialState = {
  loan: [],
};

export default function (state = InitialState, action) {
  switch (action.type) {
    case ADD_LOAN:
      return { ...state, loan: action.payload };

    default:
      return state;
  }
}
