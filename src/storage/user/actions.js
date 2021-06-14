export function createUser(user) {
  return {
    type: "create",
    payload: user,
  };
}

export function updateUser(user) {
  return {
    type: "update",
    payload: user,
  };
}
