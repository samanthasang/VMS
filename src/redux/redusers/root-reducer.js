import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import registerReduser from "./registerReduser";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["register"],
};

const rootReducer = combineReducers({
  register: registerReduser,
});

export default persistReducer(persistConfig, rootReducer);
