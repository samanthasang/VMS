import { RESET_PASSWORD_USER, LOGIN_USER, REGISTER_USER } from "./types";
import axios from "axios";

export const loginUser = (inputs) => {
  return async (dispatch) => {
    await axios({
      method: "post",
      url: "http://192.168.1.32:8000/api/auth/login",
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
          });
      },
      (error) => {
        console.log(error);
      }
    );
  };
};

export const registerUser = () => {
  return {
    type: REGISTER_USER,
  };
};