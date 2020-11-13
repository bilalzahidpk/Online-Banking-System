import { GET_ERRORS, AUTH_ERROR, GET_USER } from "./types";
import { createMessage } from "./messages";
import axios from "axios";
import { tokenPass } from "./complaint";
import { store } from "../store";
import { returnErrors } from "./messages";

export const getUser = () => (dispatch) => {
  const token = store.getState().auth.key;
  axios
    .get("http://127.0.0.1:8000/rest-auth/user/", tokenPass(token))
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: GET_USER,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
