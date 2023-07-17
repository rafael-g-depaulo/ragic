export type EnsureLiteral<L extends string> = string extends L ? never : string;

export type ExtractPath<P extends EnsureLiteral<P>> = P;
// special case for if it's
// P extends `/${infer Path}` ? `${Path}` : never

export type JoinPaths<P extends EnsureLiteral<P>, C extends EnsureLiteral<C>> =
  // special case for if parent is "/"
  /* "/" extends P ? C : */
  `${P}${C}`;

export type CompilePath<P extends string[]> = P extends []
  ? ``
  : P extends [infer A extends EnsureLiteral<A>, ...infer Rest extends string[]]
  ? JoinPaths<A, `${CompilePath<Rest>}`>
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
