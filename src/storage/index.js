import { combineReducers, createStore } from "redux";
import userReducer from "./user/reducers";
import passwordReducer from "./password/reducers";

const combinedReducer = combineReducers({
  user: userReducer,
  passwords: passwordReducer,
});

const store = createStore(combinedReducer);
export default store;
