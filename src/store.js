import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReduser from "./redux/redusers";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReduser,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
