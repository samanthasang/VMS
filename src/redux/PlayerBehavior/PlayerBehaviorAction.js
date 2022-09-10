import PlayerBehaviorTypes from "./PlayerBehaviorTypes";


export const PlayerBehaviorChange = (x) => (dispatch) => {
  try {
    dispatch({
      type: PlayerBehaviorTypes.PLAYER_BEHAVIOR_SET,
      payload: x,
    });
  } catch (error) {
    console.log(error);
  }
};


// export const PlayerURLChange = (url) => (dispatch) => {
//   try {
//     dispatch({
//       type: PlayerBehaviorTypes.PLAYER_URL_SET,
//       payload: { url: url },
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const PlayerPlayingStatusChange = (playing) => (dispatch) => {
//   try {
//     dispatch({
//       type: PlayerBehaviorTypes.PLAYER_PLAYING_STATUS_SET,
//       payload: { playing: playing },
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };


// export const PlayerPlaybackRateChange = (playbackRate) => (dispatch) => {
//   try {
//     dispatch({
//       type: PlayerBehaviorTypes.PLAYER_PLAYBACK_RATE_SET,
//       payload: { playbackRate: playbackRate },
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const PlayerVolumeChange = (volume) => (dispatch) => {
//   try {
//     dispatch({
//       type: PlayerBehaviorTypes.PLAYER_VOLUME_SET,
//       payload: { volume: volume },
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
