import { createAction } from 'redux-actions';
import { GOING_TO_ROUTE } from './constants';
import { IRouteState } from './state';

export const goingToRoute = createAction<IRouteState, string>(GOING_TO_ROUTE, nextRoute => ({ nextRoute }));
