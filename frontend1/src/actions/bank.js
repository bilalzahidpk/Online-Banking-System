import { GET_BANK } from "./types";
import axios from "axios";

export const getBank = () => dispatch => {
  axios
    .get("http://127.0.0.1:8000/api/bank/")
    .then(res => {
      dispatch({
        type: GET_BANK,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
