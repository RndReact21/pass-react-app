import { combineReducers, createStore } from "redux";
import userReducer from "./user/reducers";
function passwordReducer(state = [], action) {
  return state;
}

const combinedReducer = combineReducers({
  user: userReducer,
  passwords: passwordReducer,
});

const store = createStore(combinedReducer);
export default store;
