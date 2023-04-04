import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import registerReducer from "./register_redux/registerReducer";
import forgotPasswordReducer from "./forgotpassword_redux/forgotPasswordReducer";
import loginReducer from "./login_redux/loginReducer";
import deviceReducer from "./device_redux/deviceReducer";

import liveViewReducer from "./liveView_redux/liveViewReducer";
import LayoutReducer from "./layout_redux/layoutReducer";
import userReducer from "./user-redux/userReducer";

import playbackReducer from "./playback_redux/playbackReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login", "LayoutReducer", "liveView"],
};

const rootReducer = combineReducers({
  login: loginReducer,
  device: deviceReducer,
  playback: playbackReducer,
  liveView: liveViewReducer,
  forgotPassword: forgotPasswordReducer,
  LayoutReducer: LayoutReducer,
  register: registerReducer,
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
