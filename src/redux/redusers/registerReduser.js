import {
  RESET_PASSWORD_USER,
  LOGIN_USER,
  REGISTER_USER,
  GET_USER,
} from "../action/types";

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
  accessToken: "",
  refreshToken: "",
  expRefreshToken: "",
  expAccessToken: "",
  createdAt: 0,
  updatedAt: 0,
  isLogedIn: false,
  isAdmin: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isLogedIn: true,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        expRefreshToken: action.expRefreshToken,
        expAccessToken: action.expAccessToken,
        createdAt: action.createdAt,
        updatedAt: action.updatedAt,
        email: action.email,
        firstName: action.firstName,
        lastName: action.lastName,
        isAdmin: action.isAdmin,
      };
    case GET_USER:
      return state.isLogedIn;
    default:
      return state;
  }
};
