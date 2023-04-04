// import WhichPlayerSelectedTypes from "./PlayerBehaviorTypes";
import SelectedVideoPlayerAndPlayerUrlsTypes from "./SelectedVideoPlayerAndPlayerUrlsTypes";

const initialState = {
  SelectedPlayer: 1,
  url: "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
  pip: false,
};

console.log(SelectedVideoPlayerAndPlayerUrlsTypes.SELECTED_PLAYER_SET);

export const SelectedVideoPlayerAndPlayerUrlsState = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SelectedVideoPlayerAndPlayerUrlsTypes.SELECTED_PLAYER_SET:
      return { ...state, SelectedPlayer: action.payload };
    default:
      return state;
  }
};
