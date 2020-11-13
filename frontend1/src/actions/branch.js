import { GET_BRANCH } from "./types";
import axios from "axios";

export const getBranch = () => dispatch => {
  axios
    .get("http://127.0.0.1:8000/api/branch/")
    .then(response => {
      dispatch({
        type: GET_BRANCH,
        payload: response.data
      });
    })
    .catch(err => console.log(err));
};
