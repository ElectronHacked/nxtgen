import { IRouteState } from './state';
import { GOING_TO_ROUTE } from './constants';

const initialState: IRouteState = {
  nextRoute: '',
};

const routeReducer = (state: IRouteState = initialState, action: ReduxActions.Action<IRouteState>) => {
  if (action.payload === GOING_TO_ROUTE) {
    return { ...state, ...action.payload };
  }

  return state;
};

export default routeReducer;
