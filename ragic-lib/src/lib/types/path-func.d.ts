import { EmptyObject, ExtractRouteTree } from './globals';
import { Routes } from './route';
import {
  ConcreteSegment,
  EmptySegment,
  LinkSegment,
  Segment,
  SegmentKindOpts,
  SegmentOpts,
} from './segment';
import { EnsureLiteral } from './string-utils';

type PathFuncReturn<
  RestTree extends unknown[],
  PathName extends EnsureLiteral<PathName>,
  Opts
> = Opts extends SegmentOpts<infer Children>
  ? 'component' extends keyof Opts
    ? Routes<
        [
          ...RestTree,
          Segment<PathName, ConcreteSegment, ExtractRouteTree<Children>>
        ]
      >
    : // if link path
    'link_to' extends keyof Opts
    ? Routes<
        [
          ...RestTree,
          Segment<PathName, LinkSegment, ExtractRouteTree<Children>>
        ]
      >
    : // if empty path
      Routes<
        [
          ...RestTree,
          Segment<PathName, EmptySegment, ExtractRouteTree<Children>>
        ]
      >
  : never;

export type PathFuncReturnByOpts<
  UserOpts,
  RestTree extends unknown[],
  PathName extends EnsureLiteral<PathName>
> = SegmentKindOpts extends UserOpts
  ? PathFuncReturn<RestTree, PathName, EmptyObject>
  : PathFuncReturn<RestTree, PathName, UserOpts>;

export type PathFunc<RestTree extends unknown[] = []> = <
  PathName extends EnsureLiteral<PathName>,
  Opts extends SegmentKindOpts
>(
  path: PathName,
  opts?: Opts
) => SegmentKindOpts extends Opts
  ? PathFuncReturn<RestTree, PathName, EmptyObject>
  : PathFuncReturn<RestTree, PathName, Opts>;
