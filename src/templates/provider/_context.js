import { createContext } from 'react';

export type IFlagProgressFlags = '__DEFAULT__' /* NEW_IN_PROGRESS_FLAG_GOES_HERE */;
export type IFlagSucceededFlags = '__DEFAULT__' /* NEW_SUCCEEDED_FLAG_GOES_HERE */;
export type IFlagErrorFlags = '__DEFAULT__' /* NEW_ERROR_FLAG_GOES_HERE */;
export type IFlagActionedFlags = '__DEFAULT__' /* NEW_ACTIONED_FLAG_GOES_HERE */;

export interface I<%= stateName %>StateContext
  extends IFlagsState <IFlagProgressFlags, IFlagSucceededFlags, IFlagErrorFlags, IFlagActionedFlags> {

}

export interface IUiActionsContext
  extends IFlagsSetters <IFlagProgressFlags, IFlagSucceededFlags, IFlagErrorFlags, IFlagActionedFlags> {
  
}

export const <%= stateNameCaps %>_CONTEXT_INITIAL_STATE: I<%= stateName %>StateContext = {

};

export const UiStateContext = createContext<I<%= stateName %>StateContext>(<%= stateNameCaps %>_CONTEXT_INITIAL_STATE);

export const UiActionsContext = createContext<I<%= stateName %>ActionsContext>(undefined);
