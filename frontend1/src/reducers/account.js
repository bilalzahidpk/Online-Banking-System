import { ACCOUNT_SUCCESS, ACCOUNT_FAIL } from "../actions/types";

const InitialState = {
  accountCreation: false
};

export default function(state = InitialState, action) {
  switch (action.type) {
    case ACCOUNT_SUCCESS:
      return {
        ...state,
        accountCreation: true
      };
    case ACCOUNT_FAIL:
      return {
        ...state,
        accountCreation: false
      };
    default:
      return state;
  }
}
