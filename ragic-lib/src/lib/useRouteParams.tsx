import { useParams } from 'react-router-dom';
import { ExtractRouteTree } from './types/globals';
import { RouteIndexParams } from './types/link';
import { IndexedPaths } from './types/paths';

export const makeUseRouteParams =
  <UserRoutes,>(routes: UserRoutes) =>
  <
    IndexedRoute extends IndexedPaths<
      ExtractRouteTree<UserRoutes>
    > = IndexedPaths<ExtractRouteTree<UserRoutes>>
  >(
    route?: IndexedRoute
  ): RouteIndexParams<IndexedRoute> => {
    return useParams() as any;
  };
