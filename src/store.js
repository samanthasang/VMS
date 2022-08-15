import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReduser from "./redux/redusers/registerReduser";


const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  repeatPassword: "",
  question1: "",
  question2: "",
  question3: "",
  question1Answer: "",
  question2Answer: "",
  question3Answer: "",
  accessToken: "",
  refreshToken: "",
  expRefreshToken: "",
  expAccessToken: "",
  createdAt: 0,
  updatedAt: 0,
  isLogedIn: false,
  isAdmin: false,
};


const middleware = [thunk];

const store = createStore(
  rootReduser,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
