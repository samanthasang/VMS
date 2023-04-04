import {
  addVideoPlayBack,
  aspectVideoPlayBack,
  removeAllVideoPlayBack,
  removeShowHeaderPlayBack,
  removeVideoPlayBack,
  showHeaderPlayBack,
} from "./playBack.utils";
import PlaybackActionTypes from "./playbackTypes";

const INITIAL_STATE = {
  cameraChecked: [],
  duriation: null,
  cutIsOn: null,
  url: {
    id: 1,
    url: "",
    aspect: "aspect_D",
    ref: "playerRef",
    headerShow: false,
  },
  urls: [
    {
      id: 1,
      url: "",
      aspect: "aspect_D",
      ref: "playerRef",
      headerShow: false,
    },
    {
      id: 2,
      url: "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
      aspect: "aspect_D",
      ref: "playerRef1",
      headerShow: false,
    },
    {
      id: 3,
      url: "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
      aspect: "aspect_D",
      ref: "playerRef2",
      headerShow: false,
    },
    {
      id: 4,
      url: "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
      aspect: "aspect_D",
      ref: "playerRef3",
      headerShow: false,
    },
  ],
  cutTime: [
    { startTime: null, key: 11112222 },
    { endTime: null, key: 22221111 },
  ],
  startTime: null,
  endTime: null,
  disabledDates: [],
  AcitiveDate: [],
  loading: false,
  loadingError: false,
  loadingVideo: true,
  cameraID: "",
};

const playbackReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PlaybackActionTypes.CHECK_CAMERA:
      return {
        ...state,
        cameraChecked: action.payload,
      };
    case PlaybackActionTypes.DISABLE_DATE:
      return {
        ...state,
        disabledDates: `['${action.payload}']`,
      };
    case PlaybackActionTypes.ACTIVE_DATE:
      return {
        ...state,
        AcitiveDate: action.payload,
      };
    case PlaybackActionTypes.ADD_DURATION_PLAYBACK:
      return {
        ...state,
        duriation: action.payload,
      };
    case PlaybackActionTypes.REF_PLAYBACK:
      return {
        ...state,
        duriation: action.payload,
      };
    case PlaybackActionTypes.CAMERA_ID:
      return {
        ...state,
        cameraID: action.payload,
      };
    case PlaybackActionTypes.ADD_VIDEO_PLAYBACK:
      return {
        ...state,
        urls: addVideoPlayBack(state.urls, action.payload),
      };
    case PlaybackActionTypes.CUT_PLAYBACK:
      return {
        ...state,
        cutIsOn: action.payload,
      };
    case PlaybackActionTypes.LOADING_PLAYBACK:
      return {
        ...state,
        loading: action.payload,
        lottieoff: false,
      };
    case PlaybackActionTypes.LOADING_ERROR_PLAYBACK:
      return {
        ...state,
        loading: false,
        lottieoff: action.payload,
      };
    case PlaybackActionTypes.LOADING_VIDEO_PLAYBACK:
      return {
        ...state,
        loadingVideo: action.payload,
      };
    case PlaybackActionTypes.CUT_TIME_PLAYBACK:
      return {
        ...state,
        startTime: action.payload.startTime,
        endTime: action.payload.endTime,
      };
    case PlaybackActionTypes.HEADER_VIDEO_PLAY_BACK:
      return {
        ...state,
        urls: showHeaderPlayBack(state.urls, action.payload),
      };
    case PlaybackActionTypes.HIDE_HEADER_VIDEO_PLAY_BACK:
      return {
        ...state,
        urls: removeShowHeaderPlayBack(state.urls, action.payload),
      };
    case PlaybackActionTypes.REMOVE_VIDEO_PLAY_BACK:
      return {
        ...state,
        url: removeVideoPlayBack(state.urls, action.payload),
        urls: removeVideoPlayBack(state.urls, action.payload),
      };
    case PlaybackActionTypes.ASPECT_VIDEO_PLAY_BACK:
      return {
        ...state,
        url: aspectVideoPlayBack(state.urls, action.payload),
        urls: aspectVideoPlayBack(state.urls, action.payload),
      };
    case PlaybackActionTypes.REMOVE_ALL_VIDEO_PLAY_BACK:
      return {
        ...state,
        url: removeAllVideoPlayBack(state.urls, action.payload),
        urls: removeAllVideoPlayBack(state.urls, action.payload),
      };
    default:
      return state;
  }
};

export default playbackReducer;
