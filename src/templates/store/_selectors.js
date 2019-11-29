import { createSelector } from 'reselect';
import { IStoreState } from '../storeState';
import {
  <%= stateShortName %>Errable,
  <%= stateShortName %>Booleanable,
  <%= stateShortName %>Successible,
} from './state';

export const <%= stateName %> = () => (state: IStoreState) => state.<%= nameWithLowerCase %>;
