import { ChangeComponent } from "./user.utils";
import UserTypes from "./userTypes";

const INITIAL_STATE = {
  component: [
    {
      value: 0,
      key: 1,
      id: 1,
      title: "Add Role",
    },
    {
      value: 0,
      key: 2,
      id: 2,
      title: "Request User",
    },
    {
      value: 1,
      key: 3,
      id: 3,
      title: "user",
    },
    {
      value: 0,
      key: 4,
      id: 4,
      title: "Role",
    },
    {
      value: 0,
      key: 5,
      id: 5,
      title: "edit role",
    },
    {
      value: 0,
      key: 6,
      id: 6,
      title: "edit user",
    },
    {
      value: 0,
      key: 7,
      id: 7,
      title: "add user",
    },
  ],
  componentusers: 1,
  iconrender: true,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.CHANGE_COMPONENT:
      return {
        ...state,
        component: ChangeComponent(state.component, action.payload),
      };
    case UserTypes.GET_ID:
      return {
        ...state,
        componentusers: action.payload,
      };
    
    default:
      return state;
  }
};

export default userReducer;
