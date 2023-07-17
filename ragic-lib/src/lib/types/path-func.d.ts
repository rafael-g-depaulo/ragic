type ExtractGrandChildren<Route> = unknown extends Route
  ? unknown
  : Route extends IncompleteRoutes<infer Tree>
  ? Tree
  : never;

export type PathFunc<RestTree extends unknown[] = []> = <
  PathName extends EnsureLiteral<PathName>,
  GrandChildren,
  Kind extends PathKinds
>(
  path: PathName,
  opts: PathOpts<GrandChildren> & Kind
) => // if concrete path
'component' extends keyof Kind
  ? IncompleteRoutes<
      [
        ...RestTree,
        ConcreteSegment<PathName, ExtractGrandChildren<GrandChildren>>
      ]
    >
  : // if link path
  'link_to' extends keyof Kind
  ? IncompleteRoutes<
      [...RestTree, LinkSegment<PathName, ExtractGrandChildren<GrandChildren>>]
    >
  : // if empty path
    IncompleteRoutes<
      [...RestTree, EmptySegment<PathName, ExtractGrandChildren<GrandChildren>>]
    >;
