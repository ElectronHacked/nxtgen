import { createAction } from 'redux-actions';
import { IGlobalStateContext } from './contexts';

export enum GlobalActionEnums {
  ToggleHeaderVisibility = 'TOGGLE_HEADER_VISIBILITY',
  FetchPosts = 'FETCH_POSTS_REQUEST',
  FetchPostsSuccess = 'FETCH_POSTS_SUCCESS',
  RegisterUser = 'REGISTER_USER_REQUEST',
  /* NEW_ACTION_TYPE_GOES_HERE */
}

export const toggleHeaderVisibilityAction = createAction<IGlobalStateContext, boolean>(
  GlobalActionEnums.ToggleHeaderVisibility,
  isHeaderShown => ({
    isHeaderShown,
  })
);

export const fetchPostsAction = createAction<IGlobalStateContext>(GlobalActionEnums.FetchPosts, () => ({}));

export const fetchPostsSuccessAction = createAction<IGlobalStateContext>(
  GlobalActionEnums.FetchPostsSuccess,
  () => ({})
);

/* NEW_ACTION_GOES_HERE */
