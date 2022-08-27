import RegisterActionTypes from "./registerTypes";

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  repeatPassword: "",
  question1: {},
  question2: {},
  question3: {},
  question1ID: "",
  question2ID: "",
  question3ID: "",
  question1Answer: "",
  question2Answer: "",
  question3Answer: "",
};

const registerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RegisterActionTypes.REGISTER_USER:
      return {
        ...state,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        repeatPassword: "",
      };
    case RegisterActionTypes.GET_QUESTIONS:
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

export default registerReducer;
