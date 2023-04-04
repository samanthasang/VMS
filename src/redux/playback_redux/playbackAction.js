import PlaybackActionTypes from "./playbackTypes";

export const CameraChecked = (checkedKey) => {
  return {
    type: PlaybackActionTypes.CHECK_CAMERA,
    payload: checkedKey,
  };
};

export const RefPlayBack = (inputs) => {
  return {
    type: PlaybackActionTypes.REF_PLAYBACK,
    payload: inputs,
  };
};
export const DisableDate = (inputs) => {
  return {
    type: PlaybackActionTypes.DISABLE_DATE,
    payload: inputs,
  };
};
export const ActiveDate = (inputs) => {
  return {
    type: PlaybackActionTypes.ACTIVE_DATE,
    payload: inputs,
  };
};
export const AddDurationPlayBack = (duration) => {
  return {
    type: PlaybackActionTypes.ADD_DURATION_PLAYBACK,
    payload: duration,
  };
};
export const AddVideoPlayBack = (id, src) => {
  return {
    type: PlaybackActionTypes.ADD_VIDEO_PLAYBACK,
    payload: id,
    src,
  };
};
export const SetHeaderPlayBack = (payload) => {
  return {
    type: PlaybackActionTypes.HEADER_VIDEO_PLAY_BACK,
    payload: payload,
  };
};
export const SetHideHeaderPlayBack = (payload) => {
  return {
    type: PlaybackActionTypes.HIDE_HEADER_VIDEO_PLAY_BACK,
    payload: payload,
  };
};
export const AddCutPlayBack = (cut) => {
  return {
    type: PlaybackActionTypes.CUT_PLAYBACK,
    payload: cut,
  };
};
export const CameraID = (cut) => {
  return {
    type: PlaybackActionTypes.CAMERA_ID,
    payload: cut,
  };
};
export const LoadingPlayBack = (cut) => {
  return {
    type: PlaybackActionTypes.LOADING_PLAYBACK,
    payload: cut,
  };
};
export const LoadingErrorPlayBack = (cut) => {
  return {
    type: PlaybackActionTypes.LOADING_ERROR_PLAYBACK,
    payload: cut,
  };
};
export const LoadingVideoPlayBack = (load) => {
  return {
    type: PlaybackActionTypes.LOADING_VIDEO_PLAYBACK,
    payload: load,
  };
};
export const AddCutTimePlayBack = (startTime, endTime) => {
  return {
    type: PlaybackActionTypes.CUT_TIME_PLAYBACK,
    payload: startTime,
    endTime,
  };
};

export const RemoveVideoPlayBack = (id) => {
  return {
    type: PlaybackActionTypes.REMOVE_VIDEO_PLAY_BACK,
    payload: id,
  };
};
export const AspectVideoPlayBack = (id, aspect) => {
  return {
    type: PlaybackActionTypes.ASPECT_VIDEO_PLAY_BACK,
    payload: id,
    aspect,
  };
};
export const RemoveALLVideoPlayBack = () => {
  return {
    type: PlaybackActionTypes.REMOVE_ALL_VIDEO_PLAY_BACK,
  };
};
