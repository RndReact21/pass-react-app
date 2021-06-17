import { applyMiddleware, combineReducers, createStore } from "redux";
import userReducer from "./user/reducers";
import passwordReducer from "./password/reducers";
import thunk from "redux-thunk";

const combinedReducer = combineReducers({
  user: userReducer,
  passwords: passwordReducer,
});

const store = createStore(combinedReducer, applyMiddleware(thunk));
export default store;
