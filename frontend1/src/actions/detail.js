import { GET_ERRORS, AUTH_ERROR, GET_DETAIL } from "./types";
import { createMessage } from "./messages";
import axios from "axios";
import { tokenPass } from "./complaint";
import { store } from "../store";
import { returnErrors } from "./messages";

export const getDetail = () => async dispatch => {
  const token = store.getState().auth.key;
  const response = await axios.get(
    "http://127.0.0.1:8000/rest-auth/user/",
    tokenPass(token)
  );
  axios
    .get(
      `http://127.0.0.1:8000/account/account/${response.data.pk}/`,
      tokenPass(token)
    )
    .then(res => {
      dispatch({
        type: GET_DETAIL,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
