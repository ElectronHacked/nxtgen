import { all, takeLatest, delay } from '@redux-saga/core/effects';

import { RESET_ALL_FLAGS } from './constants';

function* resetAllFlagsSaga() {
  yield delay(250);
  console.log('resetAllFlagsSaga.............');
}

export default function* registrationSaga() {
  yield all([takeLatest(RESET_ALL_FLAGS, resetAllFlagsSaga)]);
}
