import React, { FC, useReducer, useContext, PropsWithChildren } from 'react';
import { <%= stateNameCamelCase %>Reducer } from './reducer';
import { setControlsSizeAction } from './actions';
import { 
  <%= stateName %>ActionsContext,
  <%= stateName %>StateContext, 
  <%= stateName %>_CONTEXT_INITIAL_STATE
} from './contexts';
import { getFlagSetters } from '../utils/flagsSetters';

const <%= stateName %>Provider: FC<PropsWithChildren<any>> = ({ children }) => {
  const [state, dispatch] = useReducer(<%= stateNameCamelCase %>Reducer, <%= stateNameCaps %>_CONTEXT_INITIAL_STATE);

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
