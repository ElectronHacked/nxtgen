import { all, takeLatest, delay } from '@redux-saga/core/effects';

import { FETCH_POSTS_REQUEST__F__FISA } from './constants';

function* fetchPostsSaga() {
  yield delay(0);
  console.log('fetchPostsSaga.............');
}

export default function* postsSaga() {
  yield all([takeLatest(FETCH_POSTS_REQUEST__F__FISA, fetchPostsSaga)]);
}
