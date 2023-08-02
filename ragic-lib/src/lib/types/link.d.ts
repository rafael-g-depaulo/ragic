import { PropsWithChildren } from 'react';
import { EmptyObject, ExtractRouteTree } from './globals';
import { EnsureLiteral } from './string-utils';
import { ConcretePaths } from './route';

type RouteIndexParamsKeys<RoutePath extends EnsureLiteral<RoutePath>> =
  // index parent
  RoutePath extends `/:${infer IndexSegName}/${infer Rest}`
    ? IndexSegName | RouteIndexParamsKeys<`/${Rest}`>
    : // non-index parent
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    RoutePath extends `/${infer _SegName}/${infer Rest}`
    ? RouteIndexParamsKeys<`/${Rest}`>
    : // index leaf
    RoutePath extends `/:${infer IndexSegName}`
    ? IndexSegName
    : // non-index leaf
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    RoutePath extends `/${infer _SegName}`
    ? never
    : never;

type RouteIndexParams<RoutePath extends EnsureLiteral<RoutePath>> = Record<
  RouteIndexParamsKeys<RoutePath>,
  string
>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DistributeAndCombine<T extends EnsureLiteral<T>> = T extends any
  ? { to: T } & (keyof RouteIndexParams<T> extends never
      ? EmptyObject
      : { params: RouteIndexParams<T> })
  : never;

export type LinkProps<
  UserRoutes
  //ConcretePaths extends EnsureLiteral<ConcretePaths>
> = PropsWithChildren<
  DistributeAndCombine<ConcretePaths<ExtractRouteTree<UserRoutes>>>
>;
