import { createSelector } from 'reselect';
import { IApplicationState } from '../applicationState';

export const loginState = () => (state: IApplicationState) => state.route;

export const selectNextRoute = () =>
  createSelector(
    loginState(),
    state => state.nextRoute
  );
