import { createSelector } from 'reselect';
import { IApplicationState } from '../applicationState';

export const postsState = () => (state: IApplicationState) => state.posts;

export const selectPosts = () =>
  createSelector(
    postsState(),
    ({ posts }) => posts
  );
