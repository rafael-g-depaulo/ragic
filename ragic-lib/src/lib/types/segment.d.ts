import { Component, EmptyObject } from './globals';
import { EnsureFromUnion, EnsureLiteral } from './string-utils';

export type ConcreteSegment = 'concrete';
export type LinkSegment = 'link';
export type EmptySegment = 'empty';

export type SegmentKinds =
  | ConcreteSegment // has component ("page" and "index" kinds)
  | LinkSegment // alias routes
  | EmptySegment; // has no component

type SegmentKindOpts =
  | EmptyObject // empty path (also optional, can just not give opts)
  | { component: Component } // concrete path (with "Page" or "Index" component)
  | { link_to: string }; // link path

export type SegmentOpts<Children> = SegmentKindOpts & { children?: Children };

export type Segment<
  Name extends EnsureLiteral<Name>,
  Kind extends EnsureFromUnion<Kind, SegmentKinds>,
  ChildRouteTree extends unknown[]
> = [Name, Kind, ChildRouteTree];
