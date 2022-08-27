import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import registerReducer from "../register_redux/registerReducer";
import forgotPasswordReducer from "../forgotpassword_redux/forgotPasswordReducer";
import loginReducer from "../login_redux/loginReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login"],
};

const rootReducer = combineReducers({
  login: loginReducer,
});

export default persistReducer(persistConfig, rootReducer);
