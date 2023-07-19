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
