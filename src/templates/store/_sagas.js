import { all, select, takeLatest, delay, put } from 'redux-saga/effects';
import {
  DEFAULT_ACTION,
  /* new-constant-import-goes-here */
} from './constants';
import {
  toggle<%= stateShortName %>BooleanableState
  /* new-action-import-goes-here */
} from './actions';

export function* intializeSaga() {
  const booleanable = yield select(select<%= stateShortName %>BooleanableState('__booleanable__'));

 
}

/* new-saga-goes-here */

export default function* <%= sagaName %>() {
  yield all([
    takeLatest(DEFAULT_ACTION, intializeSaga),
    /* new-saga-registration-goes-here */
  ]);
}
