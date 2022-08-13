import { RESET_PASSWORD_USER, LOGIN_USER, REGISTER_USER } from '../action/types';


const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  repeatPassword: "",
  question1: "",
  question2: "",
  question3: "",
  question1Answer: "",
  question2Answer: "",
  question3Answer: "",
  isLogedIn: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isLogedIn: true,
      };
    default:
      return state;
  }
};
