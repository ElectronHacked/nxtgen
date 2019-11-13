import { createSelector } from 'reselect';
import { IApplicationState } from '../applicationState';
import { IFlagProgressFlags, IFlagSucceededFlags, IFlagFailedFlags, IFlagActionedFlags } from './state';

export const flagsState = () => (state: IApplicationState) => state.flags;

/**
 * Returns true if the evaluation of a isInProgress state of a given key(s) is true
 * @param key the key to compare to
 */
export const selectIsInProgressFlags = (...key: IFlagProgressFlags[]) =>
  createSelector(
    flagsState(),
    ({ isInProgress }) => isInProgress && !!key.filter(k => isInProgress[k]).length
  );

/**
 * Returns true if the evaluation of a succeeded state of a given key(s) is true
 * @param key the key to compare to
 */
export const selectSucceeded = (...key: IFlagSucceededFlags[]) =>
  createSelector(
    flagsState(),
    ({ succeeded }) => succeeded && !!key.filter(k => succeeded[k]).length
  );

/**
 * Returns true if the evaluation of a failed state of a given key(s) is true
 * @param key the key to compare to
 */
export const selectFailed = (...key: IFlagFailedFlags[]) =>
  createSelector(
    flagsState(),
    ({ failed }) => failed && !!key.filter(k => failed[k]).length
  );

/**
 * Returns true if the evaluation of a actioned state of a given key(s) is true
 * @param key the key to compare to
 */
export const selectActioned = (...key: IFlagActionedFlags[]) =>
  createSelector(
    flagsState(),
    ({ actioned }) => actioned && !!key.filter(k => actioned[k]).length
  );
