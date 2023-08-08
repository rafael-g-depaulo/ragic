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

export type IfIndexedPath<
  SegmentPath extends string[],
  AccPath extends string[] = []
> = [] extends SegmentPath
  ? never
  : SegmentPath extends [
      infer Segment extends string,
      ...infer Rest extends string[]
    ]
  ? Segment extends `/:${infer _Index}`
    ? CompilePath<[...AccPath, ...SegmentPath]>
    : IfIndexedPath<Rest, [...AccPath, Segment]>
  : never;

export type IndexedPaths<
  RouteTree extends unknown[],
  AccumulatePath extends string[] = []
> = RouteTree extends []
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
