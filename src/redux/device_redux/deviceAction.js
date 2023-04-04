import axios from "axios";
import DeviceActionTypes from "./deviceTypes";
import { UserLogOut } from "../login_redux/loginAction";
export const LoadTable = (inputs) => {
  return {
    type: DeviceActionTypes.LOAD_TABLE,
    payload: inputs,
  };
};
export const GroupTable = (useraccessToken) => {
  return async (dispatch) => {
    var url = process.env.REACT_APP_HTTP + "/api/admin/groups/groups";

    var accessToken = useraccessToken;
    var config = {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    };
    await axios
      .get(url, config)
      .then((res) => {
        console.log(res.data.data);
        dispatch({
          type: DeviceActionTypes.GROUP_TABLE,
          payload: res.data.data.groups,
        });
      })
      .catch((e) => {
        e.response.status === 401 && dispatch(UserLogOut());
        console.log(e);
      });
  };
};
export const GetGroup = (inputs) => {
  return {
    type: DeviceActionTypes.GROUP_TABLE,
    payload: inputs,
  };
};
export const SelectRowForDelete = (inputs) => {
  return {
    type: DeviceActionTypes.SELECT_ROW,
    payload: inputs,
  };
};
export const ChangeLoading = () => {
  return {
    type: DeviceActionTypes.CHANGE_LOADING,
  };
};
export const CountDevices = (inputs) => {
  return {
    type: DeviceActionTypes.COUNT_DEVICES,
    payload: inputs,
  };
};

// export const AddModalData = () => {
//   return {
//     type: DeviceActionTypes.ADD_MODAL_DATA,
//     payload: inputsData,
//   };
// };
// export const RemoveModalData = () => {
//   return {
//     type: DeviceActionTypes.REMOVE_MODAL_DATA,
//     payload: inputsData,
//   };
// };
