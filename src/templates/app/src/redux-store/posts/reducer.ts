import { IPostState } from './state';
import { FETCH_POSTS_REQUEST__F__FISA, FETCH_POSTS_SUCCESS__F__FISA, FETCH_POSTS_ERROR__F__FISA } from './constants';

const initialState: IPostState = {
  posts: [],
};

const postsReducer = (state: IPostState = initialState, { type, payload }: ReduxActions.Action<IPostState>) => {
  switch (type) {
    case FETCH_POSTS_REQUEST__F__FISA:
    case FETCH_POSTS_SUCCESS__F__FISA:
    case FETCH_POSTS_ERROR__F__FISA:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default postsReducer;
