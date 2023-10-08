import { Routes } from './route';
import { ConcreteSegment, EmptySegment, LinkSegment } from './segment';
import { CompilePath } from './string-utils';

// Get all concrete paths for a route tree
export type ConcretePaths<UserRoutes> = UserRoutes extends Routes<
  infer RouteTree
>
  ? CompilePath<ConcretePathsRecursion<RouteTree, []>>
  : never;
type ConcretePathsRecursion<
  RouteTree,
  AccumulatePath extends string[]
> = unknown extends RouteTree
  ? AccumulatePath
  : RouteTree extends []
  ? never
  : RouteTree extends [infer Child, ...infer RestTree]
  ?
      | ([] | unknown extends RestTree
          ? Child extends ConcreteSegment<
              infer ChildPathname extends string,
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              infer _GrandChildren
            >
            ? [...AccumulatePath, ChildPathname]
            : never
          : Child extends ConcreteSegment<
              infer ChildPathname extends string,
              infer GrandChildren
            >
          ? ConcretePathsRecursion<
              GrandChildren,
              [...AccumulatePath, ChildPathname]
            >
          : Child extends LinkSegment<
              infer ChildPathname extends string,
              infer GrandChildren
            >
          ? ConcretePathsRecursion<
              GrandChildren,
              [...AccumulatePath, ChildPathname]
            >
          : Child extends EmptySegment<
              infer ChildPathname extends string,
              infer GrandChildren
            >
          ? ConcretePathsRecursion<
              GrandChildren,
              [...AccumulatePath, ChildPathname]
            >
          : never)
      | ConcretePathsRecursion<RestTree, AccumulatePath>
  : never;

type EnsurePathContainsIndexSegment<
  Path extends string,
  Acc extends string = ''
> =
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Path extends `/:${infer _Index}`
    ? `${Acc}${Path}`
    : Path extends `/${infer NonIndexSegment}/${infer Rest}`
    ? EnsurePathContainsIndexSegment<`/${Rest}`, `${Acc}/${NonIndexSegment}`>
    : never;

export type IfIndexedPath<
  Path extends string[],
  AccPath extends string[] = []
> = [] extends Path
  ? never
  : Path extends [infer Segment extends string, ...infer Rest extends string[]]
  ? Segment extends EnsurePathContainsIndexSegment<Segment>
    ? CompilePath<[...AccPath, ...Path]>
    : IfIndexedPath<Rest, [...AccPath, Segment]>
  : never;

export type IndexedPaths<
  RouteTree extends unknown[],
  AccumulatePath extends string[] = []
> = [] extends RouteTree
  ? never
  : RouteTree extends [infer Route, ...infer RestTree]
  ? Route extends [
      infer ChildName extends string,
      infer ChildKind extends string,
      infer GrandChildren extends unknown[]
    ]
    ? ChildName extends EnsureLiteral<ChildName>
      ? ChildKind extends EnsureFromUnion<ChildKind, SegmentKinds>
        ? // this segment
          | IfIndexedPath<[...AccumulatePath, ChildName]>
            // recur on siblins
            | IndexedPaths<RestTree, AccumulatePath>
            // recur on children
            | IndexedPaths<GrandChildren, [...AccumulatePath, ChildName]>
        : never
      : never
    : never
  : never;
