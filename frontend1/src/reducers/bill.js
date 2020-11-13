import { ADD_BILL, GOT_ACCOUNT, GOT_ACCOUNT_FAILED } from "../actions/types";

const InitialState = {
  billDetail: "",
};

export default function (state = InitialState, action) {
  switch (action.type) {
    case ADD_BILL:
      return { ...state, billDetail: action.payload };

    case GOT_ACCOUNT:
      return { ...state, account: action.payload };

    case GOT_ACCOUNT_FAILED:
      return { ...state, message: "Account Failed" };
    default:
      return state;
  }
}
