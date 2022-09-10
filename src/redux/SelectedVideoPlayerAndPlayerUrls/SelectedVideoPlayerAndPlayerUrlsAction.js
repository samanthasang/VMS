import SelectedVideoPlayerAndPlayerUrlsTypes from "./SelectedVideoPlayerAndPlayerUrlsTypes";


export const SelectedVideoPlayerAndPlayerUrlsChange = (x) => (dispatch) => {
  try {
    dispatch({
      type: SelectedVideoPlayerAndPlayerUrlsTypes.SELECTED_PLAYER_SET,
      payload: x,
    });
  } catch (error) {
    console.log(error);
  }
};