/* eslint-disable @typescript-eslint/no-unused-vars */

export type EnsureLiteral<L extends string> = string extends L ? never : string;

/* export type ExtractPath<P extends EnsureLiteral<P>> =
    P extends `/${infer Path}` ? `${Path}` : never */

export type JoinPaths<P extends EnsureLiteral<P>, C extends EnsureLiteral<C>> =
  // special case for if parent is "/"
  /* "/" extends P ? C : */
  `${P}${C}`;

export type CompilePath<P extends string[]> = P extends []
  ? ``
  : P extends [infer A extends string, ...infer Rest extends string[]]
  ? JoinPaths<`${A}`, `${CompilePath<Rest>}`>
  : never;

export type EnsureFromUnion<
  S extends string,
  Union extends EnsureLiteral<Union>
> =
  // needs to be literal
  string extends S
    ? never
    : // needs to be contained in union
    Union extends S
    ? string
    : never;

export type RouteIndexParamsKeys<RoutePath extends EnsureLiteral<RoutePath>> =
  // index parent
  RoutePath extends `/:${infer IndexSegName}/${infer Rest}`
    ? IndexSegName | RouteIndexParamsKeys<`/${Rest}`>
    : // non-index parent
    RoutePath extends `/${infer _SegName}/${infer Rest}`
    ? RouteIndexParamsKeys<`/${Rest}`>
    : // index leaf
    RoutePath extends `/:${infer IndexSegName}`
    ? IndexSegName
    : // non-index leaf
    RoutePath extends `/${infer _SegName}`
    ? never
    : never;
