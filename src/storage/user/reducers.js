function userReducer(
  state = {
    name: "bncc",
    email: "a@bncc.net",
  },
  action
) {
  switch (action.type) {
    case "create":
      // insert user
      return action.payload;
    case "update":
      //update user
      return action.payload;
    default:
      return state;
  }
}

export default userReducer;
