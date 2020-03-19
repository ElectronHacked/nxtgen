import { createAction } from 'redux-actions';
import { I<%= stateName %>StateContext } from './contexts';

export enum <%= stateName %>ActionEnums {
  DefaultAction = 'DEFAULT_ACTION',
  /* NEW_ACTION_TYPE_GOES_HERE */
}

export const defaultAction = createAction<I<%= stateName %>StateContext>(<%= stateName %>ActionEnums.DefaultAction, () => ({}));

/* NEW_ACTION_GOES_HERE */