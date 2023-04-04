import loginActionTypes from "./loginTypes";

export const LoginUser = (inputs) => {
  return {
    type: loginActionTypes.LOGIN_USER,
    payload: inputs,
  };
};

export const UserLogOut = () => {
  return {
    type: loginActionTypes.LOGOUT_USER,
  };
};


export const RenewAcceessToken = (payload) => {
  return {
    type: loginActionTypes.RENEW_ACCESS_TOKEN,
    payload: payload,
  };
};
