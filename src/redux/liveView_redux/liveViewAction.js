import liveViewTypes from "./liveViewTypes";
import axios from "axios";
import OpenNotification from "../../components/form-items/notification/notification.component";

export const GetSRC = (inputs) => {
  console.log("r " + inputs.checked);
  return async (dispatch) => {};
};

export const SetWindows = () => {
  return {
    type: liveViewTypes.SET_WINDOWS,
  };
};
export const SwtVideoPlayer = () => {
  return {
    type: liveViewTypes.SET_VIDEO_PLAYER,
  };
};
