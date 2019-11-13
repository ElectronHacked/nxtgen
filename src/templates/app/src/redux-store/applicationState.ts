import { IRouteState } from './route/state';
import { IFlagsState } from './flags/state';
import { IPostState } from './posts/state';

/* new-imported-state-goes-here */

export interface IApplicationState {
  readonly route: IRouteState;
  readonly flags: IFlagsState;
  readonly posts: IPostState;
  /* new-imported-state-key-goes-here */
}
