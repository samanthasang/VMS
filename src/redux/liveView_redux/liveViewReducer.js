import liveViewTypes from "./liveViewTypes";

const INITIAL_STATE = [
  {
    id: "1",
    widown_4: "widown_4",
    src: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
  },
  {
    id: "2",
    widown_4: "widown_4",
    src: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
  },
  {
    id: "3",
    widown_4: "widown_4",
    src: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
  },
  {
    id: "4",
    widown_4: "widown_4",
    src: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
  },
];

const liveViewReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case liveViewTypes.GET_SRC:
      return {
        ...state,
      };
    case liveViewTypes.SET_WINDOWS:
      return {
        ...state,
      };
    case liveViewTypes.SET_VIDEO_PLAYER:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default liveViewReducer;
