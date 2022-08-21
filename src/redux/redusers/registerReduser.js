import {
  RESET_PASSWORD_USER,
  LOGIN_USER,
  REGISTER_USER,
  GET_USER,
  LOGOUT_USER,
} from "../action/types";

const INITIAL_STATE = {
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
  accessToken: "",
  refreshToken: "",
  expRefreshToken: "",
  expAccessToken: "",
  createdAt: 0,
  updatedAt: 0,
  isLogedIn: false,
  isAdmin: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isLogedIn: true,
        email: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isLogedIn: false,
      }
    case GET_USER:
      return state;
    default:
      return state;
  }
};
