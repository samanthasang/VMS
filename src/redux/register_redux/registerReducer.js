import RegisterActionTypes from "./registerTypes";

const INITIAL_STATE = {
  email: "",
};

const registerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default registerReducer;
