import { createAction } from 'redux-actions';
import {
  DEFAULT_ACTION,
  /* new-constant-import-goes-here */
} from './constants';
import {
  <%= stateName %>,
} from './state';

export const defaultAction = createAction<<%= stateName %>>(DEFAULT_ACTION, () => ({}));

/* new-actions-go-here */