import PlayerBehaviorTypes from "./PlayerBehaviorTypes";

const initialState = {
  url: "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
  pip: false,
  playing: false,
  controls: false,
  light: false,
  volume: 0.7,
  muted: true,
  played: 0,
  loaded: 0,
  duration: 0,
  playbackRate: 1,
  loop: false,
  isCutting: false,
  justForTest: [
    {
      id: "background_all",
      editable: true,

      start: "2022-07-26T15:15:15",
      end: "2022-07-26T15:15:30",
      type: "background",
      style: "background-color: rgba(15, 243, 255, 0.7 );",
      className: "positive",
    },
  ],
  justForTest2: 1,
  selectedPlayerId: "playerRefObject1",
};

export const PlayerBehaviorState = (state = initialState, action) => {
  switch (action.type) {
    case PlayerBehaviorTypes.PLAYER_BEHAVIOR_SET:
      return action.payload;
    default:
      return state;
  }
};
