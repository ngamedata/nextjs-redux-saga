import { put, takeEvery } from "redux-saga/effects";
import { addNum, subNum, setAction, ACTION_TYPES } from "../actions";

export function* addEffect() {
  // yield put(addNum(num));
  // any async action can go here
  // const posts = yield call(
  //   axios.get,
  //   "https://jsonplaceholder.typicode.com/posts"
  // );
  console.log("addaction triggred");
  yield put(setAction("add"));
}

export function* subEffect() {
  // yield put(subNum(num));
  console.log("subaction triggered");
  yield put(setAction("sub"));
}

export default function* countWatcher() {
  yield takeEvery(ACTION_TYPES.ADD_NUM, addEffect); // addnum action will provoke adder saga
  yield takeEvery(ACTION_TYPES.SUB_NUM, subEffect); // subnum action will provoke subber saga
}
