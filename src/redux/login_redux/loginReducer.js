import loginActionTypes from "./loginTypes";

const INITIAL_STATE = {
  user: {},
  isLogedIn: false,
  remember: false,
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case loginActionTypes.LOGIN_USER:
      return {
        ...state,
        isLogedIn: true,
        user: action.payload,
      };
    case loginActionTypes.LOGOUT_USER:
      return {
        ...state,
        user: {},
        isLogedIn: false,
      };
    case loginActionTypes.REMEMBER_USER:
      return {
        ...state,
        user: {},
        remember: true,
      };
    default:
      return state;
  }
};

export default loginReducer;
