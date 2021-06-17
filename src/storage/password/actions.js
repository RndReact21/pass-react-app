import axios from "axios";
import {
  CREATE_PASSWORD,
  UPDATE_PASSWORD,
  DELETE_PASSWORD,
  GET_PASSWORD_FROM_SERVER,
} from "./constant";

export function createPassword(password) {
  return {
    type: CREATE_PASSWORD,
    payload: password,
  };
}

// dispatch (setPassword)

export const setPasswords = (api) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(api);
      dispatch({
        type: GET_PASSWORD_FROM_SERVER,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: GET_PASSWORD_FROM_SERVER,
        payload: [],
      });
    }
  };
};

export function updatePassword(password) {
  return {
    type: UPDATE_PASSWORD,
    payload: password,
  };
}

export function deletePassword(password) {
  return {
    type: DELETE_PASSWORD,
    payload: password,
  };
}
