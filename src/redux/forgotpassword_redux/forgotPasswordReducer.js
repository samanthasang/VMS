import ForgotPasswordActionTypes from "./ForgotPasswordTypes";

const INITIAL_STATE = {
  email: "",
};

const forgotPasswordReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default forgotPasswordReducer;
