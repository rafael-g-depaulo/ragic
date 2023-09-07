import { Component, type_brand_key } from './types/globals';
import { PathFuncReturnByOpts } from './types/path-func';
import { ConcretePaths, NewRouteTree, Routes } from './types/route';
import { SegmentKindOpts } from './types/segment';
import { EnsureLiteral } from './types/string-utils';

const makePathFunc =
  <RouteTree extends unknown[] = []>(context: RouteTree) =>
  <PathName extends EnsureLiteral<PathName>, Options extends SegmentKindOpts>(
    path: PathName,
    opts: Options = {} as Options
  ): PathFuncReturnByOpts<Options, RouteTree, PathName> => {
    const concreteChildRoutes =
      'children' in opts
        ? Object.fromEntries(
            Object
              // get all concrete routes from children
              .entries<Component>(opts.children as Record<string, Component>)
              // only routes, not methods and stuff
              .filter(([key]) => key[0] === '/')
              // append the current path as it's parent
              .map(([key, value]) => [`${path}${key}`, value])
          )
        : {};

    // if current segment is a concrete route, add it
    const concreteCurrentRoute =
      'component' in opts ? { [path]: opts.component } : {};

    // compile new concrete routes based on context, children and current
    const concreteRoutes = {
      ...context,
      ...concreteCurrentRoute,
      ...concreteChildRoutes,
    } as Record<
      ConcretePaths<NewRouteTree<RouteTree, PathName, Options>>,
      Component
    >;

    const pathFunc = makePathFunc(concreteRoutes as RouteTree);

    const newRoutes = {
      [type_brand_key]: {} as NewRouteTree<RouteTree, PathName, Options>,
      path: pathFunc,
      ...concreteRoutes,
      // explicit conversion below needed to ensure proper typing
    } as unknown as PathFuncReturnByOpts<Options, RouteTree, PathName>;

    return newRoutes;
  };

export const path = makePathFunc<[]>([]);
export const createRoutes = () => path('/') as unknown as Routes<[]>;
