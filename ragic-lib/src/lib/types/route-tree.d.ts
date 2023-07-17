import { SegmentKind } from './segment';
import { EnsureFromUnion } from './string-utils';

type RoutesChildren<
  RouteTree,
  AccumulatePath extends string[] = []
> = unknown extends RouteTree
  ? {}
  : RouteTree extends []
  ? {}
  : RouteTree extends [
      [
        infer ChildName extends EnsureLiteral<ChildName>,
        infer ChildKind extends EnsureFromUnion<ChildKind, SegmentKind>,
        infer GrandChildren
      ],
      ...infer RestTree
    ]
  ? SegmentProps<[...AccumulatePath, ChildName], ChildKind> &
      RoutesChildren<GrandChildren, [...AccumulatePath, ChildName]> &
      RoutesChildren<RestTree, AccumulatePath>
  : never;

// incomplete type used in the builder
type IncompleteRoutes<RouteTree extends unknown[]> = {
  path: PathFunc<RouteTree>;
} & { create: CompileFunc<RouteTree> };

// complete type
export type Routes<RouteTree extends unknown[]> = RoutesChildren<RouteTree>;
// & { path: PathFunc<RouteTree> }
