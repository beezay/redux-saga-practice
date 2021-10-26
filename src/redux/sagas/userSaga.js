import { call, put, takeEvery } from "redux-saga/effects";

const APIURL = "https://jsonplaceholder.typicode.com/users";

function getAPI() {
  return fetch(APIURL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((e) => {
      throw e;
    });
}

function* fetchUsers(action) {
  try {
    const users = yield call(getAPI);
    yield put({
      type: "GET_USERS_SUCCESS",
      users: users,
    });
  } catch (error) {
    yield put({
      type: "GET_USERS_FAILED",
      message: error.message,
    });
  }
}

function* userSaga() {
  yield takeEvery("GET_USERS_REQUESTED", fetchUsers);
}

export default userSaga;
