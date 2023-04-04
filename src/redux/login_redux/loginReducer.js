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
    case loginActionTypes.RENEW_ACCESS_TOKEN:
      return {
        ...state,
        user: {
          ...state.user,
          accessToken: action.payload.accessToken,
          expAccessToken: action.payload.expAccessToken,
        },
      };
    default:
      return state;
  }
};

export default loginReducer;
