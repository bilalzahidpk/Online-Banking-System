import { ADD_LOAN, GOT_ACCOUNT, GOT_ACCOUNT_FAILED } from "./types";
import { GET_ERRORS, AUTH_ERROR } from "./types";
import { createMessage } from "./messages";
import axios from "axios";
import { tokenPass } from "./complaint";
import { store } from "../store";
import { returnErrors } from "./messages";

export const addLoan = (loanAmount, loanPeriod, loanType) => (dispatch) => {
  const token = store.getState().auth.key;
  const loan = {
    loan_name: loanType,
    loan_amount: parseInt(loanAmount),
    loan_period: loanPeriod * 12,
  };
  console.log(loan);
  axios
    .post("http://127.0.0.1:8000/account/loan/", loan, tokenPass(token))
    .then((res) => {
      dispatch(
        createMessage({
          loanAdded: `Your application for ${loanType} loan has been submitted`,
        })
      );
      dispatch({ type: ADD_LOAN, payload: res.data });
    })
    .catch((err) => {
      console.log(err.response.data);

      dispatch({
        type: GET_ERRORS,
        payload: {
          message: { loanNotBought: "You must select all fields", status: 400 },
        },
      });
    });
};
