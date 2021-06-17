import {
  UPDATE_PASSWORD,
  DELETE_PASSWORD,
  CREATE_PASSWORD,
  GET_PASSWORD_FROM_SERVER,
} from "./constant";

let defaultPasswordList = [
  { id: 123, password: "123", website: "BNCC", username: "email@gmail.com" },
];

function passwordReducer(state = defaultPasswordList, action) {
  let newState = state;
  switch (action.type) {
    case CREATE_PASSWORD:
      newState = [...state, action.payload];
      return newState;
    case UPDATE_PASSWORD:
      newState = state.map(function (oldPassword) {
        if (oldPassword.id === action.payload.id) {
          return action.payload;
        }
        return oldPassword;
      });
      return newState;
    case DELETE_PASSWORD:
      newState = state.filter(function (oldPassword) {
        return oldPassword.id !== action.payload.id;
      });
      return newState;
    case GET_PASSWORD_FROM_SERVER:
      return action.payload;
    default:
      return state;
  }
}

export default passwordReducer;
