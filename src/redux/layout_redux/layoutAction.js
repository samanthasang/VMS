import LayoutActionTypes from "./layoutTypes";

export const LoadMenu = (inputs) => {
  return {
    type: LayoutActionTypes.SET_MENU,
    payload: inputs,
  };
};
