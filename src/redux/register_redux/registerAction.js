import RegisterActionTypes from "./registerTypes";
import axios from "axios";
import OpenNotification from "../../components/notification/notification.component";

export const GetListQuestions = (inputs) => {
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

export const SetPersonalInfo = () => {
  return {
    type: loginActionTypes.LOGOUT_USER,
  };
};
