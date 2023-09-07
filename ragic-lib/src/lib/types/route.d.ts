import { Component } from 'react';
import { Brand, type_brand_key } from './globals';
import { ConcreteSegment, SegmentKinds } from './segment';
import { CompilePath, EnsureFromUnion, EnsureLiteral } from './string-utils';
import { PathFunc } from './path-func';

export type Routes<RouteTree extends unknown[]> = Brand<
  typeof type_brand_key,
  RouteTree
> &
  Record<ConcretePaths<RouteTree>, Component> & { path: PathFunc<RouteTree> };

export type IfConcretePath<
  SegmentPath extends string[],
  Kind extends EnsureFromUnion<Kind, SegmentKinds>
> =
  // if child concrete
  ConcreteSegment extends Kind ? CompilePath<SegmentPath> : never;

export type ConcretePathsDict<ConcretePaths extends string> = Record<
  ConcretePaths,
  Component
>;

export type ConcretePaths<
  RouteTree,
  AccumulatePath extends string[] = []
> = unknown extends RouteTree
  ? never // maybe this line is unecessary
  : RouteTree extends []
  ? never
  : RouteTree extends [infer Route, ...infer RestTree]
  ? Route extends [
      infer ChildName extends string,
      infer ChildKind extends string,
      infer GrandChildren
    ]
    ? ChildName extends EnsureLiteral<ChildName>
      ? ChildKind extends EnsureFromUnion<ChildKind, SegmentKinds>
        ? // this segment
          | IfConcretePath<[...AccumulatePath, ChildName], ChildKind>
            // recur on siblins
            | ConcretePaths<RestTree, AccumulatePath>
            // recur on children
            | ConcretePaths<GrandChildren, [...AccumulatePath, ChildName]>
        : never
      : never
    : never
  : never;

export type NewRouteTree<
  OldRouteTree extends unknown[],
  PathName extends EnsureLiteral<PathName>,
  Opts extends SegmentKindOpts
> = ExtractRouteTree<PathFuncReturnByOpts<Opts, OldRouteTree, PathName>>;
