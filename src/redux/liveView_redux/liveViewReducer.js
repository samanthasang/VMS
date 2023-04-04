import {
  addAspectOneVideo,
  addAspectVideo,
  addNewView,
  addVideo,
  changeStream,
  hideHeader,
  removeAllVideo,
  removeVideo,
  showHeader,
} from "./liveView.utils";
import liveViewTypes from "./liveViewTypes";

// /stream/:uuid/channel/:channel/webrtc
const INITIAL_STATE = {
  Windows: {
    id: "1",
    window: "window_1",
    span: 12,
    height: "50%",
  },
  Windows_video: [
    {
      id: "1",
      window: "window_1",
      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "2",
      window: "window_1",
      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "3",
      window: "window_1",
      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "4",
      window: "window_1",
      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
  ],
  Windows_single_video: [
    {
      id: "1",
      window: "window_8",
      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
  ],
  Windows_single_video1: [
    {
      id: "1",
      window: "window_9",
      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
  ],
  Windows_4: [
    {
      id: "1",
      key: "Windows_4_1",
      window: "window_1",
      src: "",       
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "2",
      key: "Windows_4_2",
      window: "window_1",
      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "3",
      key: "Windows_4_3",
      window: "window_1",
      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "4",
      key: "Windows_4_4",
      window: "window_1",
      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
  ],
  Windows_9: [
    {
      id: "1",
      key: "Windows_9_1",
      window: "window_2",
      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "2",
      key: "Windows_9_2",
      window: "window_2",
      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "3",
      key: "Windows_9_3",
      window: "window_2",
      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "4",
      key: "Windows_9_4",
      window: "window_2",
      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "5",
      key: "Windows_9_5",
      window: "window_2",
      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "6",
      key: "Windows_9_6",
      window: "window_2",
      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "7",
      key: "Windows_9_7",
      window: "window_2",
      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "8",
      key: "Windows_9_8",
      window: "window_2",
      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "9",
      key: "Windows_9_9",
      window: "window_2",
      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
  ],
  Windows_16: [
    {
      id: "1",
      window: "window_3",
      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "2",
      window: "window_3",
      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "3",
      window: "window_3",
      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "4",
      window: "window_3",
      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "5",
      window: "window_3",
      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "6",
      window: "window_3",
      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "7",
      window: "window_3",
      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "8",
      window: "window_3",
      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "9",
      window: "window_3",
      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "10",
      window: "window_3",
      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "11",
      window: "window_3",
      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "12",
      window: "window_3",
      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "13",
      window: "window_3",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "14",
      window: "window_3",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "15",
      window: "window_3",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "16",
      window: "window_3",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
  ],
  Windows_25: [
    {
      id: "1",
      window: "window_4",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "2",
      window: "window_4",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "3",
      window: "window_4",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "4",
      window: "window_4",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "5",
      window: "window_4",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "6",
      window: "window_4",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "7",
      window: "window_4",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "8",
      window: "window_4",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "9",
      window: "window_4",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "10",
      window: "window_4",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "11",
      window: "window_4",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "12",
      window: "window_4",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "13",
      window: "window_4",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "14",
      window: "window_4",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "15",
      window: "window_4",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "16",
      window: "window_4",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "17",
      window: "window_4",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "18",
      window: "window_4",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "19",
      window: "window_4",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "20",
      window: "window_4",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "21",
      window: "window_4",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "22",
      window: "window_4",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "23",
      window: "window_4",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "24",
      window: "window_4",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
  ],
  Windows_36: [
    {
      id: "1",
      window: "window_5",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "2",
      window: "window_5",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "3",
      window: "window_5",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "4",
      window: "window_5",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "5",
      window: "window_5",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "6",
      window: "window_5",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "7",
      window: "window_5",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "8",
      window: "window_5",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "9",
      window: "window_5",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "10",
      window: "window_5",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "11",
      window: "window_5",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "12",
      window: "window_5",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "13",
      window: "window_5",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "14",
      window: "window_5",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "15",
      window: "window_5",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "16",
      window: "window_5",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "17",
      window: "window_5",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "18",
      window: "window_5",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "19",
      window: "window_5",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "20",
      window: "window_5",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "21",
      window: "window_5",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "22",
      window: "window_5",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "23",
      window: "window_5",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "24",
      window: "window_5",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "25",
      window: "window_5",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "26",
      window: "window_5",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "27",
      window: "window_5",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "28",
      window: "window_5",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "29",
      window: "window_5",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "30",
      window: "window_5",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "31",
      window: "window_5",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "32",
      window: "window_5",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "33",
      window: "window_5",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "34",
      window: "window_5",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "35",
      window: "window_5",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "36",
      window: "window_5",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
  ],
  Windows_49: [
    {
      id: "1",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "2",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "3",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "4",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "5",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "6",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "7",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "8",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "9",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "10",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "11",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "12",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "13",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "14",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "15",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "16",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "17",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "18",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "19",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "20",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "21",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "22",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "23",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "24",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "25",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "26",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "27",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "28",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "29",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "30",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "31",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "32",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "33",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "34",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "35",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "36",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "37",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "38",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "39",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "40",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "41",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "42",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "43",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "44",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "45",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "46",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "47",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "48",
      window: "window_6",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
  ],
  Windows_64: [
    {
      id: "1",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "2",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "3",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "4",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "5",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "6",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "7",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "8",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "9",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "10",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "11",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "12",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "13",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "14",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "15",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "16",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "17",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "18",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "19",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "20",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "21",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "22",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "23",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "24",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "25",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "26",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "27",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "28",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "29",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "30",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "31",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "32",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "33",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "34",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "35",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "36",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "37",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "38",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "39",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "40",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "41",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "42",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "43",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "44",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "45",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "46",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "47",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "48",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "49",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "50",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "51",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "52",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "53",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "54",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "55",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "56",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "57",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "58",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "59",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "60",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "61",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "62",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "63",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "64",
      window: "window_7",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
  ],
  Windows_151: [
    {
      id: "1",
      window: "window_8",

      src: "",
      src2: "",
      chooseSrc: 2,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
  ],
  Windows_152: [
    {
      id: "2",
      window: "window_8",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "3",
      window: "window_8",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
  ],
  Windows_153: [
    {
      id: "4",
      window: "window_8",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "5",
      window: "window_8",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "6",
      window: "window_8",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
  ],
  Windows_171: [
    {
      id: "1",
      window: "window_9",

      src: "",
      src2: "",
      chooseSrc: 2,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
  ],
  Windows_172: [
    {
      id: "2",
      window: "window_9",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "3",
      window: "window_9",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "4",
      window: "window_9",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
  ],
  Windows_175: [
    {
      id: "5",
      window: "window_9",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "6",
      window: "window_9",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "7",
      window: "window_9",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
    {
      id: "8",
      window: "window_9",

      src: "",
      src2: "",
      chooseSrc: 1,
      headerShow: false,
      aspectRatio: "aspect_D",
    },
  ],
  Organization: [],
  View: [
    {
      title: "Default group",
      icon: 1,
      key: "0-0-3",
      children: [
        {
          title: "cam4",
          icon: 2,
          key: "0-0-2-5",
          Windows: {
            id: "1",
            window: "window",
            span: 12,
            height: "50%",
          },
          Windows_video: [
            {
              id: "1",
              window: "window",
              src: "http://157.90.28.102:8083/stream/cam1/channel/1/webrtc",
              src2: "http://157.90.28.102:8083/stream/cam1/channel/0/webrtc",
              // src: "",
              headerShow: false,
              aspectRatio: "aspect_D",
            },
            {
              id: "2",
              window: "window",
              src: "http://157.90.28.102:8083/stream/cam2/channel/1/webrtc",
              src2: "http://157.90.28.102:8083/stream/cam2/channel/0/webrtc",
              headerShow: false,
              aspectRatio: "aspect_D",
            },
            {
              id: "3",
              window: "window",
              src: "http://157.90.28.102:8083/stream/cam3/channel/1/webrtc",
              src2: "http://157.90.28.102:8083/stream/cam3/channel/0/webrtc",
              headerShow: false,
              aspectRatio: "aspect_D",
            },
            {
              id: "4",
              window: "window",
              src: "http://157.90.28.102:8083/stream/cam4/channel/1/webrtc",
              src2: "http://157.90.28.102:8083/stream/cam4/channel/0/webrtc",
              headerShow: false,
              aspectRatio: "aspect_D",
            },
          ],
          Windows_single_video: [
            {
              id: "1",
              window_4: "window_4",

              src: "http://157.90.28.102:8083/stream/cam1/channel/1/webrtc",
              src2: "http://157.90.28.102:8083/stream/cam1/channel/0/webrtc",
              headerShow: false,
              aspectRatio: "aspect_D",
            },
          ],
        },
        {
          title: "cam9",
          icon: 2,
          key: "0-0-2-55",
          Windows: {
            id: "2",
            window: "window",
            span: 8,
            height: "33.3333333333%",
          },
          Windows_video: [
            {
              id: "1",
              window_4: "window_4",

              src: "http://157.90.28.102:8083/stream/cam1/channel/1/webrtc",
              src2: "http://157.90.28.102:8083/stream/cam1/channel/0/webrtc",
              headerShow: false,
              aspectRatio: "aspect_D",
            },
            {
              id: "2",
              window_4: "window_4",

              src: "http://157.90.28.102:8083/stream/cam1/channel/1/webrtc",
              src2: "http://157.90.28.102:8083/stream/cam1/channel/0/webrtc",
              headerShow: false,
              aspectRatio: "aspect_D",
            },
            {
              id: "3",
              window_4: "window_4",

              src: "http://157.90.28.102:8083/stream/cam1/channel/1/webrtc",
              src2: "http://157.90.28.102:8083/stream/cam1/channel/0/webrtc",
              headerShow: false,
              aspectRatio: "aspect_D",
            },
            {
              id: "4",
              window_4: "window_4",

              src: "http://157.90.28.102:8083/stream/cam1/channel/1/webrtc",
              src2: "http://157.90.28.102:8083/stream/cam1/channel/0/webrtc",
              headerShow: false,
              aspectRatio: "aspect_D",
            },
            {
              id: "5",
              window_4: "window_4",

              src: "http://157.90.28.102:8083/stream/cam1/channel/1/webrtc",
              src2: "http://157.90.28.102:8083/stream/cam1/channel/0/webrtc",
              headerShow: false,
              aspectRatio: "aspect_D",
            },
            {
              id: "6",
              window_4: "window_4",

              src: "http://157.90.28.102:8083/stream/cam1/channel/1/webrtc",
              src2: "http://157.90.28.102:8083/stream/cam1/channel/0/webrtc",
              headerShow: false,
              aspectRatio: "aspect_D",
            },
            {
              id: "7",
              window_4: "window_4",

              src: "http://157.90.28.102:8083/stream/cam1/channel/1/webrtc",
              src2: "http://157.90.28.102:8083/stream/cam1/channel/0/webrtc",
              headerShow: false,
              aspectRatio: "aspect_D",
            },
            {
              id: "8",
              window_4: "window_4",

              src: "http://157.90.28.102:8083/stream/cam1/channel/1/webrtc",
              src2: "http://157.90.28.102:8083/stream/cam1/channel/0/webrtc",
              headerShow: false,
              aspectRatio: "aspect_D",
            },
            {
              id: "9",
              window_4: "window_4",

              src: "http://157.90.28.102:8083/stream/cam1/channel/1/webrtc",
              src2: "http://157.90.28.102:8083/stream/cam1/channel/0/webrtc",
              headerShow: false,
              aspectRatio: "aspect_D",
            },
          ],
          Windows_single_video: [
            {
              id: "1",
              window_4: "window_4",

              src: "http://157.90.28.102:8083/stream/cam1/channel/1/webrtc",
              src2: "http://157.90.28.102:8083/stream/cam1/channel/0/webrtc",
              headerShow: false,
              aspectRatio: "aspect_D",
            },
          ],
        },
        {
          title: "cam16",
          icon: 2,
          key: "0-0-2-57",
          Windows: {
            id: "3",
            window: "window",
            span: 6,
            height: "25%",
          },
          Windows_video: [
            {
              id: "1",
              window_4: "window_4",

              src: "http://157.90.28.102:8083/stream/cam1/channel/1/webrtc",
              src2: "http://157.90.28.102:8083/stream/cam1/channel/0/webrtc",
            },
            {
              id: "2",
              window_4: "window_4",

              src: "http://157.90.28.102:8083/stream/cam1/channel/1/webrtc",
              src2: "http://157.90.28.102:8083/stream/cam1/channel/0/webrtc",
            },
            {
              id: "3",
              window_4: "window_4",

              src: "http://157.90.28.102:8083/stream/cam9/channel/1/webrtc",
              src2: "http://157.90.28.102:8083/stream/cam9/channel/0/webrtc",
            },
            {
              id: "4",
              window_4: "window_4",

              src: "http://157.90.28.102:8083/stream/cam9/channel/1/webrtc",
              src2: "http://157.90.28.102:8083/stream/cam9/channel/0/webrtc",
            },
            {
              id: "5",
              window_4: "window_4",

              src: "http://157.90.28.102:8083/stream/cam9/channel/1/webrtc",
              src2: "http://157.90.28.102:8083/stream/cam9/channel/0/webrtc",
            },
            {
              id: "6",
              window_4: "window_4",

              src: "http://157.90.28.102:8083/stream/cam9/channel/1/webrtc",
              src2: "http://157.90.28.102:8083/stream/cam9/channel/0/webrtc",
            },
            {
              id: "7",
              window_4: "window_4",

              src: "http://157.90.28.102:8083/stream/cam9/channel/1/webrtc",
              src2: "http://157.90.28.102:8083/stream/cam9/channel/0/webrtc",
            },
            {
              id: "8",
              window_4: "window_4",

              src: "http://157.90.28.102:8083/stream/cam9/channel/1/webrtc",
              src2: "http://157.90.28.102:8083/stream/cam9/channel/0/webrtc",
            },
            {
              id: "9",
              window_4: "window_4",

              src: "http://157.90.28.102:8083/stream/cam9/channel/1/webrtc",
              src2: "http://157.90.28.102:8083/stream/cam9/channel/0/webrtc",
            },
            {
              id: "10",
              window_4: "window_4",

              src: "http://157.90.28.102:8083/stream/cam9/channel/1/webrtc",
              src2: "http://157.90.28.102:8083/stream/cam9/channel/0/webrtc",
            },
            {
              id: "11",
              window_4: "window_4",

              src: "http://157.90.28.102:8083/stream/cam9/channel/1/webrtc",
              src2: "http://157.90.28.102:8083/stream/cam9/channel/0/webrtc",
            },
            {
              id: "12",
              window_4: "window_4",

              src: "http://157.90.28.102:8083/stream/cam9/channel/1/webrtc",
              src2: "http://157.90.28.102:8083/stream/cam9/channel/0/webrtc",
            },
            {
              id: "13",
              window_4: "window_4",
              src: "http://157.90.28.102:8083/stream/cam9/channel/1/webrtc",
              src2: "http://157.90.28.102:8083/stream/cam9/channel/0/webrtc",
            },
            {
              id: "14",
              window_4: "window_4",

              src: "http://157.90.28.102:8083/stream/cam9/channel/1/webrtc",
              src2: "http://157.90.28.102:8083/stream/cam9/channel/0/webrtc",
            },
            {
              id: "15",
              window_4: "window_4",

              src: "http://157.90.28.102:8083/stream/cam9/channel/1/webrtc",
              src2: "http://157.90.28.102:8083/stream/cam9/channel/0/webrtc",
            },
            {
              id: "16",
              window_4: "window_4",

              src: "http://157.90.28.102:8083/stream/cam9/channel/1/webrtc",
              src2: "http://157.90.28.102:8083/stream/cam9/channel/0/webrtc",
            },
          ],
          Windows_single_video: [
            {
              id: "1",
              window_4: "window_4",

              src: "http://157.90.28.102:8083/stream/cam9/channel/1/webrtc",
              src2: "http://157.90.28.102:8083/stream/cam9/channel/0/webrtc",
            },
          ],
        },
      ],
    },
    {
      title: "Default",
      icon: 1,
      key: "0-0-3333",
      children: [],
    },
  ],
  group: [],
  customView: false,
  aspectRatio: "aspect_D",
};
const liveViewReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case liveViewTypes.GET_SRC:
      return {
        ...state,
      };
    case liveViewTypes.GET_GROUP:
      return {
        ...state,
        group: action.payload,
      };
    case liveViewTypes.SET_WINDOWS:
      return {
        ...state,
        Windows: action.payload.all_Windows,
        Windows_video: action.payload.Windows_video,
        Windows_single_video: action.payload.Windows_single_video,
        Windows_single_video1: action.payload.Windows_single_video1,
        customView: action.payload.customView,
      };
    case liveViewTypes.SET_VIDEO_PLAYER:
      return {
        ...state,
      };
    case liveViewTypes.SET_HEADER_VIDEO:
      return {
        ...state,
        Windows_video: showHeader(state.Windows_video, action.payload),
        Windows_single_video: showHeader(
          state.Windows_single_video,
          action.payload
        ),
        Windows_single_video1: showHeader(
          state.Windows_single_video1,
          action.payload
        ),
      };
    case liveViewTypes.HIDE_HEADER_VIDEO:
      return {
        ...state,
        Windows_video: hideHeader(state.Windows_video, action.payload),
        Windows_single_video: hideHeader(
          state.Windows_single_video,
          action.payload
        ),
        Windows_single_video1: hideHeader(
          state.Windows_single_video1,
          action.payload
        ),
      };
    case liveViewTypes.ADD_VIDEO:
      return {
        ...state,
        Windows_video: addVideo(state.Windows_video, action.payload),
        Windows_4: addVideo(state.Windows_4, action.payload),
        Windows_9: addVideo(state.Windows_9, action.payload),
        Windows_16: addVideo(state.Windows_16, action.payload),
        Windows_25: addVideo(state.Windows_25, action.payload),
        Windows_36: addVideo(state.Windows_36, action.payload),
        Windows_49: addVideo(state.Windows_49, action.payload),
        Windows_64: addVideo(state.Windows_64, action.payload),
        Windows_151: addVideo(state.Windows_151, action.payload),
        Windows_152: addVideo(state.Windows_152, action.payload),
        Windows_153: addVideo(state.Windows_153, action.payload),
        Windows_171: addVideo(state.Windows_171, action.payload),
        Windows_172: addVideo(state.Windows_172, action.payload),
        Windows_175: addVideo(state.Windows_175, action.payload),
        Windows_single_video: addVideo(
          state.Windows_single_video,
          action.payload
        ),
        Windows_single_video1: addVideo(
          state.Windows_single_video1,
          action.payload
        ),
      };
    case liveViewTypes.ADD_ASPECT_VIDEO:
      return {
        ...state,
        Windows_video: addAspectVideo(state.Windows_video, action.payload),
        Windows_4: addAspectVideo(state.Windows_4, action.payload),
        Windows_9: addAspectVideo(state.Windows_9, action.payload),
        Windows_16: addAspectVideo(state.Windows_16, action.payload),
        Windows_25: addAspectVideo(state.Windows_25, action.payload),
        Windows_36: addAspectVideo(state.Windows_36, action.payload),
        Windows_49: addAspectVideo(state.Windows_49, action.payload),
        Windows_64: addAspectVideo(state.Windows_64, action.payload),
        Windows_151: addAspectVideo(state.Windows_151, action.payload),
        Windows_152: addAspectVideo(state.Windows_152, action.payload),
        Windows_153: addAspectVideo(state.Windows_153, action.payload),
        Windows_171: addAspectVideo(state.Windows_171, action.payload),
        Windows_172: addAspectVideo(state.Windows_172, action.payload),
        Windows_175: addAspectVideo(state.Windows_175, action.payload),
        Windows_single_video: addAspectVideo(
          state.Windows_single_video,
          action.payload
        ),
        Windows_single_video1: addAspectVideo(
          state.Windows_single_video1,
          action.payload
        ),
      };
    case liveViewTypes.ADD_ASPECT_VIDEO_ONE:
      return {
        ...state,
        Windows_video: addAspectOneVideo(state.Windows_video, action.payload),
        Windows_4: addAspectOneVideo(state.Windows_4, action.payload),
        Windows_9: addAspectOneVideo(state.Windows_9, action.payload),
        Windows_16: addAspectOneVideo(state.Windows_16, action.payload),
        Windows_25: addAspectOneVideo(state.Windows_25, action.payload),
        Windows_36: addAspectOneVideo(state.Windows_36, action.payload),
        Windows_49: addAspectOneVideo(state.Windows_49, action.payload),
        Windows_64: addAspectOneVideo(state.Windows_64, action.payload),
        Windows_151: addAspectOneVideo(state.Windows_151, action.payload),
        Windows_152: addAspectOneVideo(state.Windows_152, action.payload),
        Windows_153: addAspectOneVideo(state.Windows_153, action.payload),
        Windows_171: addAspectOneVideo(state.Windows_171, action.payload),
        Windows_172: addAspectOneVideo(state.Windows_172, action.payload),
        Windows_175: addAspectOneVideo(state.Windows_175, action.payload),
        Windows_single_video: addAspectOneVideo(
          state.Windows_single_video,
          action.payload
        ),
        Windows_single_video1: addAspectOneVideo(
          state.Windows_single_video1,
          action.payload
        ),
      };
    case liveViewTypes.CHANGE_STREAM:
      return {
        ...state,
        Windows_video: changeStream(state.Windows_video, action.payload),
        Windows_4: changeStream(state.Windows_4, action.payload),
        Windows_9: changeStream(state.Windows_9, action.payload),
        Windows_16: changeStream(state.Windows_16, action.payload),
        Windows_25: changeStream(state.Windows_25, action.payload),
        Windows_36: changeStream(state.Windows_36, action.payload),
        Windows_49: changeStream(state.Windows_49, action.payload),
        Windows_64: changeStream(state.Windows_64, action.payload),
        Windows_151: changeStream(state.Windows_151, action.payload),
        Windows_152: changeStream(state.Windows_152, action.payload),
        Windows_153: changeStream(state.Windows_153, action.payload),
        Windows_171: changeStream(state.Windows_171, action.payload),
        Windows_172: changeStream(state.Windows_172, action.payload),
        Windows_175: changeStream(state.Windows_175, action.payload),
        Windows_single_video: changeStream(
          state.Windows_single_video,
          action.payload
        ),
        Windows_single_video1: changeStream(
          state.Windows_single_video1,
          action.payload
        ),
      };
    case liveViewTypes.REMOVE_VIDEO:
      return {
        ...state,
        Windows_video: removeVideo(state.Windows_video, action.payload),
        Windows_4: removeVideo(state.Windows_4, action.payload),
        Windows_9: removeVideo(state.Windows_9, action.payload),
        Windows_16: removeVideo(state.Windows_16, action.payload),
        Windows_25: removeVideo(state.Windows_25, action.payload),
        Windows_36: removeVideo(state.Windows_36, action.payload),
        Windows_49: removeVideo(state.Windows_49, action.payload),
        Windows_64: removeVideo(state.Windows_64, action.payload),
        Windows_151: removeVideo(state.Windows_151, action.payload),
        Windows_152: removeVideo(state.Windows_152, action.payload),
        Windows_153: removeVideo(state.Windows_153, action.payload),
        Windows_171: removeVideo(state.Windows_171, action.payload),
        Windows_172: removeVideo(state.Windows_172, action.payload),
        Windows_175: removeVideo(state.Windows_175, action.payload),
        Windows_single_video: removeVideo(
          state.Windows_single_video,
          action.payload
        ),
        Windows_single_video1: removeVideo(
          state.Windows_single_video1,
          action.payload
        ),
      };
    case liveViewTypes.REMOVE_ALL_VIDEO:
      return {
        ...state,
        Windows_video: removeAllVideo(state.Windows_video),
        Windows_4: removeAllVideo(state.Windows_4, action.payload),
        Windows_9: removeAllVideo(state.Windows_9, action.payload),
        Windows_16: removeAllVideo(state.Windows_16, action.payload),
        Windows_25: removeAllVideo(state.Windows_25, action.payload),
        Windows_36: removeAllVideo(state.Windows_36, action.payload),
        Windows_49: removeAllVideo(state.Windows_49, action.payload),
        Windows_64: removeAllVideo(state.Windows_64, action.payload),
        Windows_151: removeAllVideo(state.Windows_151, action.payload),
        Windows_152: removeAllVideo(state.Windows_152, action.payload),
        Windows_153: removeAllVideo(state.Windows_153, action.payload),
        Windows_171: removeAllVideo(state.Windows_171, action.payload),
        Windows_172: removeAllVideo(state.Windows_172, action.payload),
        Windows_175: removeAllVideo(state.Windows_175, action.payload),
        Windows_single_video: removeAllVideo(
          state.Windows_single_video,
          action.payload
        ),
        Windows_single_video1: removeAllVideo(
          state.Windows_single_video1,
          action.payload
        ),
      };
    case liveViewTypes.SET_VIEW:
      return {
        ...state,
        Windows: action.payload.Windows,
        Windows_video: action.payload.Windows_video,
        Windows_single_video: action.payload.Windows_single_video,
      };
    case liveViewTypes.SET_ORGANIZATION:
      return {
        ...state,
        Organization: action.payload,
      };
    case liveViewTypes.CHANGE_ASPECTRATIO:
      return {
        ...state,
        aspectRatio: action.payload,
      };
    case liveViewTypes.ADD_VIEW:
      return {
        ...state,
        View: addNewView(state, action.payload),
      };

    default:
      return state;
  }
};

export default liveViewReducer;
