import axios from "axios";
import { returnErrors } from "./messages";
import { getUser } from "./user";
import { getDetail } from "./detail";

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  ACCOUNT_SUCCESS,
  ACCOUNT_FAIL,
} from "./types";

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // User Loading
  dispatch({ type: USER_LOADING });

  axios
    .get("http://127.0.0.1:8000/rest-auth/user/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);

      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

// LOGIN USER
export const login = (username, password) => (dispatch) => {
  // Headers
  console.log(username + " " + password);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request Body
  const body = JSON.stringify({ username, password });

  axios
    .post("http://127.0.0.1:8000/rest-auth/login/", body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch(getUser());
      dispatch(getDetail());
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

// REGISTER USER
export const register = ({
  first_name,
  last_name,
  email,
  mobile_number,
  username,
  password1,
  password2,
}) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const user = JSON.stringify({
    username,
    email,
    password1,
    password2,
    first_name,
    last_name,
    mobile_number,
  });

  const body = JSON.stringify({
    username,
    email,
    password1,
    password2,
    first_name,
    last_name,
    mobile_number,
  });
  console.log(body);
  const account = JSON.stringify({ user, mobile_number });
  console.log(account);
  // Request Body
  axios
    .post("http://127.0.0.1:8000/rest-auth/registration/", body, config)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: REGISTER_FAIL,
      });
    });

  axios
    .post("http://127.0.0.1:8000/account/", account, config)
    .then((res) => {
      dispatch({
        type: ACCOUNT_SUCCESS,
        payload: res.data,
      });
      dispatch(getUser());
      dispatch(getDetail());
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: ACCOUNT_FAIL,
      });
    });
};

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
  axios
    .post(
      "http://127.0.0.1:8000/rest-auth/logout/",
      null,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// Setup config with token - helper function
export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().auth.token;
  console.log(token);
  // Headers
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
