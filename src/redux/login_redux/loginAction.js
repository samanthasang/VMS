import loginActionTypes from "./loginTypes";
import axios from "axios";
import OpenNotification from "../../components/notification/notification.component";

export const LoginUser = (inputs) => {
  console.log("r " + inputs.checked);
  return async (dispatch) => {
    await axios({
      method: "post",
      url: process.env.REACT_APP_HTTP + "/api/auth/login",
      data: {
        email: inputs.username,
        password: inputs.password,
        remember: inputs.checked,
      },
    }).then(
      (response) => {
        //   console.log(response.data.ok)
        response.data.ok &&
          dispatch({
            type: loginActionTypes.LOGIN_USER,
            payload: response.data.data,
          });
        OpenNotification("topRight", "", response.data.msg, "");
        console.log(response.data);
        console.log(response.data.msg);
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

export const UserLogOut = () => {
  return {
    type: loginActionTypes.LOGOUT_USER,
  };
};
export const UserRemember = () => {
  return {
    type: loginActionTypes.REMEMBER_USER,
  };
};
