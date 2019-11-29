import { 
  DEFAULT_ACTION,
  /* new-constant-import-goes-here */
} from './constants';

import { <%= stateName %> } from './state';

const initialState: <%= stateName %> = {};

export default (
  state: <%= stateName %> = initialState,
  { type, payload: incomingPayload }: ReduxActions.Action<<%= stateName %>>
) => {
  switch (type) {
    /* new-constant-cases-go-here */
    case DEFAULT_ACTION:
      return {
        ...state, 
        ...payload,
      }
    default:
      return state;
  }
};

