import { createAction } from 'redux-actions';
import { FETCH_POSTS_REQUEST__F__FISA, FETCH_POSTS_SUCCESS__F__FISA, FETCH_POSTS_ERROR__F__FISA } from './constants';
import { IPostState } from './state';

//#region Reset flags
export const fetchPostsRequest = createAction<IPostState>(FETCH_POSTS_REQUEST__F__FISA, () => ({}));

export const fetchPostsSuccess = createAction<IPostState>(FETCH_POSTS_SUCCESS__F__FISA, () => ({}));

export const fetchPostsFailure = createAction<IPostState>(FETCH_POSTS_ERROR__F__FISA, () => ({}));
//#endregion
