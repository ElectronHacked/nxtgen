import { I<%= stateName %>StateContext } from './contexts';
import { <%= stateName %>ActionEnums } from './actions';
import flagsReducer from '../utils/flagsReducer';

export function <%= stateNameCamelCase %>Reducer(
  incomingState: I<%= stateName %>StateContext,
  action: ReduxActions.Action<I<%= stateName %>StateContext>
): I<%= stateName %>StateContext {
  //#region Register flags reducer
  const state = flagsReducer(incomingState, action);

  const { type, payload } = action;
  //#endregion

  switch (type) {
    case <%= stateName %>ActionEnums.DefaultAction:
    /* NEW_ACTION_ENUM_GOES_HERE */
      return {
        ...state,
        ...payload,
      };

    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
}
