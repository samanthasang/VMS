import ForgotPasswordActionTypes from "./ForgotPasswordTypes";

const INITIAL_STATE = {
  email: "",
  question1Answer: "",
  question2Answer: "",
  question3Answer: "",
  token: "",
  password: "",
  repeatPassword: "",
};

const forgotPasswordReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ForgotPasswordActionTypes.GET_RECOVERY_TOKEN:
      return {
        ...state,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        repeatPassword: "",
      };
    case ForgotPasswordActionTypes.GET_QUESTIONS:
      return {
        ...state,
        question1: {},
        question2: {},
        question3: {},
      };
    default:
      return state;
  }
};

export default forgotPasswordReducer;
