import UserTypes from "./userTypes";

export const ChangeComponent = (component,componentusers) => {
  return {
    type: UserTypes.CHANGE_COMPONENT,
    payload: component,
  };
};
export const ChangeComUser = (id) => {
  return {
    type: UserTypes.GET_ID,
    payload: id,
  };
};

