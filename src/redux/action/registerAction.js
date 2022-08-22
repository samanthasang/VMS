import React from "react";
import { RESET_PASSWORD_USER, LOGIN_USER, REGISTER_USER, GET_USER, LOGOUT_USER } from "./types";
import axios from "axios";
import OpenNotification from "../../components/notification/notification.component";

export const LoginUser = (inputs) => {
  return async (dispatch) => {
    await axios({
      method: "post",
      url: process.env.REACT_APP_HHTP+"/api/auth/login",
      data: {
        email: `${inputs.username}`,
        password: `${inputs.password}`,
      },
    }).then(
      (response) => {
        //   console.log(response.data.ok)
        response.data.ok &&
          dispatch({
            type: LOGIN_USER,
            payload: response.data.data,
          });
        response.data.ok === "401" && console.log(response.data.ok);
        console.log(response.data.data);
      },
      (error) => {
        error.response.status === 401 &&
          OpenNotification("topRight", "", error.response.data.msg, "error");
        console.log(error);
        console.log(error.response.status);
      }
    );
  };
};

export const registerUser = () => {
  return {
    type: REGISTER_USER,
  };
};
export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};
export const getUser = () => ({
    type: GET_USER
});
