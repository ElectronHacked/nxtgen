import { IFlagsState } from './state';
import {
  SET_IS_IN_PROGRESS_FLAG,
  SET_SUCCEEDED_FLAG,
  SET_FAILED_FLAG,
  SET_ACTIONED_FLAG,
  IS_IN_PROGRESS_IDENTIFIER,
  SUCCEEDED_IDENTIFIER,
  FAILED_IDENTIFIER,
  ACTIONED_IDENTIFIER,
  IS_IN_PROGRESS_FLAG,
  SUCCEEDED_FLAG,
  FAILED_FLAG,
  ACTIONED_FLAG,
  RESET_IS_IN_PROGRESS_FLAGS,
  RESET_SUCCEEDED_FLAGS,
  RESET_FAILED_FLAGS,
  RESET_ACTIONED_FLAGS,
  RESET_ALL_FLAGS,
} from './constants';
import camelcase from 'camelcase';

const initialState: IFlagsState = {
  isInProgress: {},
  succeeded: {},
  failed: {},
  actioned: {},
};

const hasFlag = (flags: string, flag: string) => new RegExp(flag, 'i').test(flags);

const isThisFlagAction = (type: string, flag: string) => new RegExp(flag, 'i').test(type);

const flagsReducer = (state: IFlagsState = initialState, { type, payload }: ReduxActions.Action<IFlagsState>) => {
  const flaggableMatch = /__F__/.exec(type);

  if (flaggableMatch) {
    // debugger;
    // This is a flaggable action, so we need to determinE what kind of flag it is so that we can update the state acordingly

    const FLAGS = type.split('__F__')[1];

    // ["FETCH_USER_SUCCESS", "FETCH_USER", "SUCCESS", index: 0, input: "FETCH_USER_SUCCESS__F__FISA", groups: undefined]
    const actionMatch = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

    const FLAG_ACTION_KEY = camelcase((actionMatch && actionMatch[1]) || ''); //  "FETCH_USER" => fetchUser

    const { isInProgress, succeeded, failed, actioned } = state;

    let currentState = { ...state };

    if (hasFlag(FLAGS, IS_IN_PROGRESS_IDENTIFIER) && isThisFlagAction(type, IS_IN_PROGRESS_FLAG)) {
      currentState = {
        ...state,
        isInProgress: { ...isInProgress, [FLAG_ACTION_KEY]: true },
        succeeded: { ...succeeded, [FLAG_ACTION_KEY]: false },
        failed: { ...failed, [FLAG_ACTION_KEY]: false },
      };
    }

    if (hasFlag(FLAGS, SUCCEEDED_IDENTIFIER) && isThisFlagAction(type, SUCCEEDED_FLAG)) {
      currentState = {
        ...state,
        succeeded: { ...succeeded, [FLAG_ACTION_KEY]: true },
        isInProgress: { ...isInProgress, [FLAG_ACTION_KEY]: false },
      };
    }

    if (hasFlag(FLAGS, FAILED_IDENTIFIER) && isThisFlagAction(type, FAILED_FLAG)) {
      currentState = {
        ...state,
        failed: { ...failed, [FLAG_ACTION_KEY]: true },
        isInProgress: { ...isInProgress, [FLAG_ACTION_KEY]: false },
      };
    }

    if (hasFlag(FLAGS, ACTIONED_IDENTIFIER) && isThisFlagAction(type, ACTIONED_FLAG)) {
      currentState = {
        ...state,
        actioned: { ...actioned, [FLAG_ACTION_KEY]: true },
      };
    }

    return currentState;
  }

  switch (type) {
    case SET_IS_IN_PROGRESS_FLAG: {
      return {
        ...state,
        isInProgress: { ...state.isInProgress, ...payload.isInProgress },
      };
    }
    case SET_SUCCEEDED_FLAG: {
      return {
        ...state,
        succeeded: { ...state.succeeded, ...payload.succeeded },
      };
    }
    case SET_FAILED_FLAG: {
      return {
        ...state,
        failed: { ...state.failed, ...payload.failed },
      };
    }
    case SET_ACTIONED_FLAG: {
      return {
        ...state,
        actioned: { ...state.actioned, ...payload.actioned },
      };
    }
    case RESET_IS_IN_PROGRESS_FLAGS:
      return {
        ...state,
        isInProgress: {},
      };
    case RESET_SUCCEEDED_FLAGS:
      return {
        ...state,
        succeeded: {},
      };
    case RESET_FAILED_FLAGS:
      return {
        ...state,
        failed: {},
      };
    case RESET_ACTIONED_FLAGS:
      return {
        ...state,
        actioned: {},
      };
    case RESET_ALL_FLAGS:
      return {
        ...state,
        isInProgress: {},
        succeeded: {},
        failed: {},
        actioned: {},
      };
    default:
      return state;
  }
};

export default flagsReducer;
