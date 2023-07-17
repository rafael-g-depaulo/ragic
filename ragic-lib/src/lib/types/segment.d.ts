import { EnsureFromUnion } from './string-utils';

type SegmentKind =
  | 'concrete' // has component ("page" and "index" kinds)
  | 'link' // alias routes
  | 'empty'; // has no component

// route properties of types of segment
// props here means the properties of the resulting segment, not the options given to the factory
export type SegmentProps<
  SegmentPath extends string[],
  Kind extends EnsureFromUnion<Kind, SegmentKind>
> =
  // if child concrete
  'concrete' extends Kind
    ? Record<CompilePath<SegmentPath>, Component>
    : // if child link
    'link' extends Kind
    ? {}
    : // if child empty
    'empty' extends Kind
    ? {}
    : never;

type SegmentKindOpts =
  | Record<string, never> // empty path (also optional, can just not give opts)
  | { component: Component } // concrete path (with "Page" or "Index" component)
  | { link_to: string }; // link path

type SegmentChildrenOpts<Children> = unknown extends Children
  ? {}
  : { children: Children };

export type SegmentProps<Children> = SegmentKindOpts &
  SegmentChildrenOpts<Children>;

// segment "constructors"

// type of route segments
export type ConcreteSegment<SegmentName, GrandChildren> = [
  SegmentName,
  'concrete',
  GrandChildren
];
export type LinkSegment<SegmentName, GrandChildren> = [
  SegmentName,
  'link',
  GrandChildren
];
export type EmptySegment<SegmentName, GrandChildren> = [
  SegmentName,
  'empty',
  GrandChildren
];
