import { combineReducers } from "redux";
import registerReduser from "./registerReduser";

export default combineReducers({
  register: registerReduser,
});
