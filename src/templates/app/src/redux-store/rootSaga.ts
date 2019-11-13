import route from './route/sagas';
import flags from './flags/sagas';
import posts from './posts/sagas';

/* new-imported-saga-goes-here */

export default [
  route,
  flags,
  posts,
  /* new-imported-saga-element-goes-here */
];
