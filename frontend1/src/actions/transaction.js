import { DEPOSIT_TRANSACTION, WITHDRAWL_TRANSACTION } from "./types";
import { GET_ERRORS } from "./types";
import { createMessage } from "./messages";
import axios from "axios";
import { tokenPass } from "./complaint";
import { store } from "../store";
import { returnErrors } from "./messages";

const completeDeposit = async (amount, accountType, dispatch) => {
  const token = store.getState().auth.key;
  const response = await axios.get(
    "http://127.0.0.1:8000/rest-auth/user/",
    tokenPass(token)
  );
  const datares = await axios.get(
    `http://127.0.0.1:8000/account/account/${response.data.pk}/`,
    tokenPass(token)
  );
  if (accountType === "Current Account") {
    const checkAmount = datares.data.current_balance + parseInt(amount);
    const value = { current_balance: checkAmount };
    axios
      .put(
        `http://127.0.0.1:8000/account/account/${response.data.pk}/`,
        value,
        tokenPass(token)
      )
      .then((res) => {
        dispatch(
          createMessage({
            amountDeposited: `You have deposited! Rs.${amount}`,
          })
        );
        dispatch({ type: DEPOSIT_TRANSACTION, payload: amount });
      })
      .catch((err) => {
        console.log(err.response.data);
        const errors = {
          message: err.response.data,
          status: err.response.data,
        };
        dispatch({ type: GET_ERRORS, payload: errors });
      });
  } else {
    const checkAmount = datares.data.savings_balance + parseInt(amount);
    console.log(checkAmount);
    const value = { savings_balance: checkAmount };
    axios
      .put(
        `http://127.0.0.1:8000/account/account/${response.data.pk}/`,
        value,
        tokenPass(token)
      )
      .then((res) => {
        dispatch(
          createMessage({
            amountDeposited: `You have deposited! Rs.${amount}`,
          })
        );
        dispatch({ type: DEPOSIT_TRANSACTION, payload: amount });
      })
      .catch((err) => {
        console.log(err.response.data);
        const errors = {
          message: err.response.data,
          status: err.response.data,
        };
        dispatch({ type: GET_ERRORS, payload: errors });
      });
  }
};

export const deposit = (amount, accountType) => (dispatch) => {
  completeDeposit(amount, accountType, dispatch);
};

const completeWithdrawl = async (amount, accountType, dispatch) => {
  const token = store.getState().auth.key;
  const response = await axios.get(
    "http://127.0.0.1:8000/rest-auth/user/",
    tokenPass(token)
  );
  const datares = await axios.get(
    `http://127.0.0.1:8000/account/account/${response.data.pk}/`,
    tokenPass(token)
  );
  if (accountType === "Current Account") {
    const checkAmount = datares.data.current_balance - amount;
    if (checkAmount > 0) {
      const value = { current_balance: checkAmount };
      axios
        .put(
          `http://127.0.0.1:8000/account/account/${response.data.pk}/`,
          value,
          tokenPass(token)
        )
        .then((res) => {
          dispatch(
            createMessage({
              amountWithdrawl: `You have withdrawn Rs.${amount}!`,
            })
          );
          dispatch({ type: WITHDRAWL_TRANSACTION, payload: amount });
        })
        .catch((err) => {
          console.log(err.response.data);
          const errors = {
            message: err.response.data,
            status: err.response.data,
          };
          dispatch({ type: GET_ERRORS, payload: errors });
        });
    } else {
      dispatch({
        type: GET_ERRORS,
        payload: {
          message: { fundsNotTransfered: "Insufficient Funds" },
          status: 400,
        },
      });
    }
  } else {
    const checkAmount = datares.data.savings_balance - amount;
    if (checkAmount > 0) {
      const value = { savings_balance: checkAmount };
      axios
        .put(
          `http://127.0.0.1:8000/account/account/${response.data.pk}/`,
          value,
          tokenPass(token)
        )
        .then((res) => {
          dispatch(
            createMessage({
              amountWithdrawl: `You have withdrawn Rs.${amount}!`,
            })
          );
          dispatch({ type: WITHDRAWL_TRANSACTION, payload: amount });
        })
        .catch((err) => {
          console.log(err.response.data);
          const errors = {
            message: err.response.data,
            status: err.response.data,
          };
          dispatch({ type: GET_ERRORS, payload: errors });
        });
    } else {
      dispatch({
        type: GET_ERRORS,
        payload: {
          message: { fundsNotTransfered: "Insufficient Funds" },
          status: 400,
        },
      });
    }
  }
};

export const withdraw = (amount, accountType) => (dispatch) => {
  completeWithdrawl(amount, accountType, dispatch);
};
