import React, { FC, useReducer, useContext, PropsWithChildren } from 'react';
import { <%= stateNameCamelCase %>Reducer } from './reducer';
import { 
  <%= stateName %>ActionsContext,
  <%= stateName %>StateContext, 
  <%= stateNameCaps %>_CONTEXT_INITIAL_STATE
} from './contexts';
import { getFlagSetters } from '../utils/flagsSetters';
import { defaultAction, /* NEW_ACTION_IMPORT_GOES_HERE */ } from './actions';

const <%= stateName %>Provider: FC<PropsWithChildren<any>> = ({ children }) => {
  const [state, dispatch] = useReducer(<%= stateNameCamelCase %>Reducer, <%= stateNameCaps %>_CONTEXT_INITIAL_STATE);

  //#region REMOVE THIS ACTION
  const _defaultAction = () => dispatch(defaultAction());
  //#endregion

  /* NEW_ACTION_DECLARATION_GOES_HERE */

  return (
    <<%= stateName %>StateContext.Provider value={state}>
      <<%= stateName %>ActionsContext.Provider value={{ ...getFlagSetters(dispatch), /* NEW_ACTION_GOES_HERE */ }}>
        {children}
      </<%= stateName %>ActionsContext.Provider>
    </<%= stateName %>StateContext.Provider>
  );
};

function use<%= stateName %>State() {
  const context = useContext(<%= stateName %>StateContext);

  if (context === undefined) {
    throw new Error('use<%= stateName %>State must be used within a <%= stateName %>Provider');
  }

  return context;
}

function use<%= stateName %>Actions() {
  const context = useContext(<%= stateName %>ActionsContext);

  if (context === undefined) {
    throw new Error('use<%= stateName %>Actions must be used within a <%= stateName %>Provider');
  }

  return context;
}

function use<%= stateName %>() {
  return { ...use<%= stateName %>State(), ...use<%= stateName %>Actions() };
}

export { <%= stateName %>Provider, use<%= stateName %>State, use<%= stateName %>Actions, use<%= stateName %> };
