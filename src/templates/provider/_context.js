import { createContext } from 'react';

export type IFlagProgressFlags = '__DEFAULT__';
export type IFlagSucceededFlags = '__DEFAULT__';
export type IFlagFailedFlags = '__DEFAULT__';
export type IFlagActionedFlags = '__DEFAULT__';

export interface I<%= stateName %>StateContext
extends IFlagsState <IFlagProgressFlags, IFlagSucceededFlags, IFlagFailedFlags, IFlagActionedFlags> {

}

export interface IUiActionsContext
extends IFlagsSetters <IFlagProgressFlags, IFlagSucceededFlags, IFlagFailedFlags, IFlagActionedFlags> {
  
}

export const <%= stateNameCaps %>_CONTEXT_INITIAL_STATE: I<%= stateName %>StateContext = {

};

export const UiStateContext = createContext<I<%= stateName %>StateContext>(UI_CONTEXT_INITIAL_STATE);

export const UiActionsContext = createContext<I<%= stateName %>ActionsContext>(undefined);
