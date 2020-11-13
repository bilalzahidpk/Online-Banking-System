import { GET_ERRORS, FUNDS_TRANSFER, CREATE_MESSAGE } from "./types";
import { createMessage } from "./messages";
import axios from "axios";
import { tokenPass } from "./complaint";
import { store } from "../store";
import { returnErrors } from "./messages";

const completeDeposit = async (amount, accountType, pk, dispatch) => {
  const token = store.getState().auth.key;
  const datares = await axios.get(
    `http://127.0.0.1:8000/account/account/${pk}/`,
    tokenPass(token)
  );
  if (accountType === "Current Account") {
    const checkAmount = datares.data.current_balance + parseInt(amount);
    const value = { current_balance: checkAmount };
    axios
      .put(
        `http://127.0.0.1:8000/account/account/${pk}/`,
        value,
        tokenPass(token)
      )
      .catch((err) => {
        console.log(err.response.data);
        const errors = {
          message: err.response.data,
          status: err.response.status,
        };
        dispatch({ type: GET_ERRORS, payload: errors });
      });
  } else {
    const datares = await axios.get(
      `http://127.0.0.1:8000/account/account/${pk}/`,
      tokenPass(token)
    );
    const checkAmount = datares.data.savings_balance + parseInt(amount);
    const value = { savings_balance: checkAmount };
    axios
      .put(
        `http://127.0.0.1:8000/account/account/${pk}/`,
        value,
        tokenPass(token)
      )
      .catch((err) => {
        console.log(err.response.data);
        const errors = {
          message: err.response.data,
          status: err.response.status,
        };
        dispatch({ type: GET_ERRORS, payload: errors });
      });
  }
};

export const deposit = (amount, accountType, id, dispatch) => {
  completeDeposit(amount, accountType, id, dispatch);
};

const completeWithdrawl = async (
  amount,
  accountType,
  dispatch,
  receiverAccountType,
  id
) => {
  const token = store.getState().auth.key;
  const response = await axios
    .get("http://127.0.0.1:8000/rest-auth/user/", tokenPass(token))
    .then(async (res) => {
      const datares = await axios
        .get(
          `http://127.0.0.1:8000/account/account/${res.data.pk}/`,
          tokenPass(token)
        )
        .then((datares) => {
          if (accountType === "Current Account") {
            const checkAmount = datares.data.current_balance - amount;
            console.log(checkAmount);
            if (checkAmount > 0) {
              const value = { current_balance: checkAmount };
              axios
                .put(
                  `http://127.0.0.1:8000/account/account/${res.data.pk}/`,
                  value,
                  tokenPass(token)
                )
                .then((res) => {
                  dispatch(
                    createMessage({
                      fundsTransfered: `You have transfered ${amount} !`,
                    })
                  );
                })
                .catch((err) => {
                  console.log(err.response.data);
                  const errors = {
                    message: err.response.data,
                    status: err.response.status,
                  };
                  dispatch({ type: GET_ERRORS, payload: errors });
                });
              deposit(amount, receiverAccountType, id, dispatch);
            } else {
              console.log("hello");
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
            console.log(checkAmount);

            if (checkAmount > 0) {
              const value = { savings_balance: checkAmount };
              axios
                .put(
                  `http://127.0.0.1:8000/account/account/${res.data.pk}/`,
                  value,
                  tokenPass(token)
                )
                .then((res) => {
                  dispatch(
                    createMessage({
                      fundsTransfered: `You have transfered ${amount} !`,
                    })
                  );
                })
                .catch((err) => {
                  console.log(err.response.data);
                  const errors = {
                    message: err.response.data,
                    status: err.response.data,
                  };
                  dispatch({ type: GET_ERRORS, payload: errors });
                });
              deposit(amount, receiverAccountType, id, dispatch);
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
        });
    });
};

const withdraw = (amount, accountType, dispatch, receiverAccountType, id) => {
  completeWithdrawl(amount, accountType, dispatch, receiverAccountType, id);
};

export const fundsTransfer = (
  amount,
  payeeAccountType,
  receiverAccountType,
  id
) => (dispatch) => {
  const value = withdraw(
    amount,
    payeeAccountType,
    dispatch,
    receiverAccountType,
    id
  );
};
