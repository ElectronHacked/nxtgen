import React, { FC, useReducer, useContext, PropsWithChildren } from 'react';
import { uiReducer } from './reducer';

import { setControlsSizeAction, /* NEW_ACTION_IMPORT_GOES_HERE */ } from './actions';
import { ControlSize, UiActionsContext, UiStateContext, UI_CONTEXT_INITIAL_STATE } from './contexts';
import { getFlagSetters } from '../utils/flagsSetters';

const UiProvider: FC<PropsWithChildren<any>> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_CONTEXT_INITIAL_STATE);

  const setControlsSize = (size: ControlSize) => {
    dispatch(setControlsSizeAction(size));
  };

  /* NEW_ACTION_DECLARATION_GOES_HERE */

  // The main reason I put the value here is that the package I use to copy templates, `copy-template-dir` when generating the code, causes
  // Issues each time it sees double `{`. It expects that to be a template
  const value = { ...getFlagSetters(dispatch), setControlsSize /* NEW_ACTION_GOES_HERE */ };

  return (
    <UiStateContext.Provider value={state}>
      <UiActionsContext.Provider value={value}>{children}</UiActionsContext.Provider>
    </UiStateContext.Provider>
  );
};

function useUiState() {
  const context = useContext(UiStateContext);

  if (context === undefined) {
    throw new Error('useUiState must be used within a UiProvider');
  }
  return context;
}

function useUiActions() {
  const context = useContext(UiActionsContext);

  if (context === undefined) {
    throw new Error('useUiActions must be used within a UiProvider');
  }

  return context;
}

function useUi() {
  return { ...useUiState(), ...useUiActions() };
}

export { UiProvider, useUiState, useUiActions, useUi };
