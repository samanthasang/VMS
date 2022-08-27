import {
  RESET_PASSWORD_USER,
  LOGIN_USER,
  REGISTER_USER,
  GET_USER,
  LOGOUT_USER,
} from "../action/types";

const INITIAL_STATE = {
  user: "",
  isLogedIn: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isLogedIn: true,
        user: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isLogedIn: false,
      };
    case GET_USER:
      return state;
    default:
      return state;
  }
};
