import LayoutActionTypes from "./layoutTypes";

const INITIAL_STATE = {
  menuItem: "/liveview",
};

const LayoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LayoutActionTypes.SET_MENU:
      return {
        ...state,
        menuItem: action.payload,
      };
    default:
      return state;
  }
};

export default LayoutReducer;
