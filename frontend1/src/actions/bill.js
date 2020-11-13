import { ADD_BILL, GOT_ACCOUNT, GOT_ACCOUNT_FAILED } from "./types";
import { GET_ERRORS, AUTH_ERROR } from "./types";
import { createMessage } from "./messages";
import axios from "axios";
import { tokenPass } from "./complaint";
import { store } from "../store";
import { returnErrors } from "./messages";

const completePayment = async (bill, billAccount, dispatch) => {
  const token = store.getState().auth.key;
  const response = await axios.get(
    "http://127.0.0.1:8000/rest-auth/user/",
    tokenPass(token)
  );
  console.log(response.data.pk);
  const datares = await axios.get(
    `http://127.0.0.1:8000/account/account/${response.data.pk}/`,
    tokenPass(token)
  );
  if (billAccount === "Current Account") {
    console.log(bill.bill_amount);
    const checkAmount = datares.data.current_balance - bill.bill_amount;
    if (checkAmount > 0) {
      const value = { current_balance: checkAmount };
      console.log(value);
      axios.put(
        `http://127.0.0.1:8000/account/account/${response.data.pk}/`,
        value,
        tokenPass(token)
      );
      axios
        .post("http://127.0.0.1:8000/account/bill/", bill, tokenPass(token))
        .then((res) => {
          dispatch(
            createMessage({
              billAdded: "Your bill has been paid!",
            })
          );
          dispatch({ type: ADD_BILL, payload: res.data });
        })
        .catch((err) => {
          console.log(err.response.data);
          dispatch({
            type: GET_ERRORS,
            payload: {
              message: {
                billNotPaid: "You must select all fields",
                status: 400,
              },
            },
          });
        });
    } else {
      dispatch({
        type: GET_ERRORS,
        payload: {
          message: { billNotPaid: "Insufficient Funds" },
          status: 400,
        },
      });
    }
  } else {
    const checkAmount = datares.data.savings_balance - bill.bill_amount;
    if (checkAmount > 0) {
      const value = { savings_balance: checkAmount };
      axios.put(
        `http://127.0.0.1:8000/account/account/${response.data.pk}/`,
        value,
        tokenPass(token)
      );
      axios
        .post("http://127.0.0.1:8000/account/bill/", bill, tokenPass(token))
        .then((res) => {
          dispatch(
            createMessage({
              billAdded: "Your bill has been paid!",
            })
          );
          dispatch({ type: ADD_BILL, payload: res.data });
        })
        .catch((err) => {
          console.log(err.response.data);
          dispatch({
            type: GET_ERRORS,
            payload: {
              message: {
                billNotPaid: "You must select all fields",
                status: 400,
              },
            },
          });
        });
    } else {
      dispatch({
        type: GET_ERRORS,
        payload: {
          message: { billNotPaid: "Insufficient Funds" },
          status: 400,
        },
      });
    }
  }
};

export const addBill = (bill, billAccount) => (dispatch) => {
  const token = store.getState().auth.key;
  completePayment(bill, billAccount, dispatch);

  //console.log(store.getState().bill);
};
