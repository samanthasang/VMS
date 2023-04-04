import liveViewTypes from "./liveViewTypes";

export const GetSRC = (inputs) => {
  console.log("r " + inputs.checked);
  return async (dispatch) => {};
};

export const SetWindow = (
  all_Windows,
  Windows_video,
  Windows_single_video,
  Windows_single_video1,
  customView
) => {
  return {
    type: liveViewTypes.SET_WINDOWS,
    payload: all_Windows,
    Windows_video,
    Windows_single_video,
    Windows_single_video1,
    customView,
  };
};
export const AddVideo = (id, src, src2) => {
  return {
    type: liveViewTypes.ADD_VIDEO,
    payload: id,
    src,
    src2,
  };
};
export const AddVideoASpectOne = (id, aspect) => {
  return {
    type: liveViewTypes.ADD_ASPECT_VIDEO_ONE,
    payload: id,
    aspect,
  };
};
export const AddVideoASpect = (aspect) => {
  return {
    type: liveViewTypes.ADD_ASPECT_VIDEO,
    payload: aspect,
  };
};
export const ChangeStream = (id, chooseSrc) => {
  return {
    type: liveViewTypes.CHANGE_STREAM,
    payload: id,
    chooseSrc,
  };
};
export const RemoveVideo = (id) => {
  return {
    type: liveViewTypes.REMOVE_VIDEO,
    payload: id,
  };
};
export const RemoveALLVideo = () => {
  return {
    type: liveViewTypes.REMOVE_ALL_VIDEO,
  };
};
export const SetHeader = (id) => {
  return {
    type: liveViewTypes.SET_HEADER_VIDEO,
    payload: id,
  };
};
export const HideHeader = (id) => {
  return {
    type: liveViewTypes.HIDE_HEADER_VIDEO,
    payload: id,
  };
};
export const SetVIews = (id) => {
  return {
    type: liveViewTypes.SET_VIEW,
    payload: id,
  };
};
export const SetOrganization = (tree) => {
  return {
    type: liveViewTypes.SET_ORGANIZATION,
    payload: tree,
  };
};
export const AddVIews = (id) => {
  return {
    type: liveViewTypes.ADD_VIEW,
    payload: id,
  };
};
export const SwtVideoPlayer = () => {
  return {
    type: liveViewTypes.SET_VIDEO_PLAYER,
  };
};
export const ChangeAspectRatio = (aspectRatio) => {
  return {
    type: liveViewTypes.CHANGE_ASPECTRATIO,
    payload: aspectRatio,
  };
};
