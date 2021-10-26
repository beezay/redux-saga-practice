import * as types from "../types";

export const getUsers = (users) => {
  console.log("actions", users);
  return {
    type: types.GET_USERS_REQUESTED,
    payload: users,
  };
};
