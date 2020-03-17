import { createAction } from 'redux-actions';
import { I<%= stateName %>StateContext } from './contexts';

export enum <%= stateName %>ActionsEnums {
  DefaultAction = 'DEFAULT_ACTION',
  /* NEW_ACTION_TYPE_GOES_HERE */
}

export const defaultAction = createAction<<%= stateName %>>(<%= stateName %>ActionsEnums.DefaultAction, () => ({}));

/* NEW_ACTION_GOES_HERE */