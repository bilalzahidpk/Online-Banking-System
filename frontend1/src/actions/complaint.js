import { ADD_COMPLAINT } from "./types";
import { GET_ERRORS } from "./types";
import { createMessage } from "./messages";
import axios from "axios";
import { tokenConfig } from "./auth";
import { store } from "../store";

export const tokenPass = (token) => {
  // Headers
  console.log(token);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};

export const addComplaint = (complaint) => (dispatch, getState) => {
  const token = store.getState().auth.key;
  // const token = localStorage.getItem("token");
  // console.log(token);
  axios
    .post(
      "http://127.0.0.1:8000/account/complain/",
      complaint,
      tokenPass(token)
    )
    .then((res) => {
      dispatch(
        createMessage({
          complaintAdded: "We have recorded your response!",
        })
      );
      dispatch({ type: ADD_COMPLAINT, payload: res.data });
    })
    .catch((err) => {
      console.log(err.response.data);
      const errors = {
        message: err.response.data,
        status: err.response.status,
      };
      dispatch({ type: GET_ERRORS, payload: errors });
    });
};
