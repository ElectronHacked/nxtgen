import { createAction } from 'redux-actions';
import {
  SET_IS_IN_PROGRESS_FLAG,
  SET_SUCCEEDED_FLAG,
  SET_FAILED_FLAG,
  SET_ACTIONED_FLAG,
  RESET_IS_IN_PROGRESS_FLAGS,
  RESET_SUCCEEDED_FLAGS,
  RESET_FAILED_FLAGS,
  RESET_ACTIONED_FLAGS,
  RESET_ALL_FLAGS,
} from './constants';
import { IFlagsState, IFlagProgressFlags, IFlagSucceededFlags, IFlagFailedFlags, IFlagActionedFlags } from './state';

//#region Set flags
export const setIsInProgressFlag = createAction<IFlagsState, { [key in IFlagProgressFlags]?: boolean }>(
  SET_IS_IN_PROGRESS_FLAG,
  key => ({
    isInProgress: key,
  })
);

export const setSucceededFlag = createAction<IFlagsState, { [key in IFlagSucceededFlags]?: boolean }>(
  SET_SUCCEEDED_FLAG,
  key => ({
    succeeded: key,
  })
);

export const setFailedFlag = createAction<IFlagsState, { [key in IFlagFailedFlags]?: boolean }>(
  SET_FAILED_FLAG,
  key => ({
    failed: key,
  })
);

export const setActionedFlag = createAction<IFlagsState, { [key in IFlagActionedFlags]?: boolean }>(
  SET_ACTIONED_FLAG,
  key => ({
    actioned: key,
  })
);
//#endregion

//#region Reset flags
export const resetIsInProgressFlag = createAction<IFlagsState>(RESET_IS_IN_PROGRESS_FLAGS);

export const resetSucceededFlag = createAction<IFlagsState>(RESET_SUCCEEDED_FLAGS);

export const resetFailedFlag = createAction<IFlagsState>(RESET_FAILED_FLAGS);

export const resetActionedFlag = createAction<IFlagsState>(RESET_ACTIONED_FLAGS);

export const resetAllFlag = createAction<IFlagsState>(RESET_ALL_FLAGS);
//#endregion
