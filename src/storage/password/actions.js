import { CREATE_PASSWORD, UPDATE_PASSWORD, DELETE_PASSWORD } from "./constant";

export function createPassword(password) {
  return {
    type: CREATE_PASSWORD,
    payload: password,
  };
}

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
