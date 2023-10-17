import React from 'react';

// actual globals
export type Component = (() => React.ReactElement) | React.ReactElement;
// eslint-disable-next-line @typescript-eslint/ban-types
export type EmptyObject = {};

// brand stuff
export const type_brand_key: unique symbol = Symbol('__ragic_type_symbol__');
export type Brand<B extends symbol, T> = { [key in B]: T };
export type ExtractRouteTree<UserRoutes> = UserRoutes extends {
  [type_brand_key]: infer RouteTree;
}
  ? RouteTree extends unknown[]
  ? RouteTree
  : never
  : never;
