import React, { PropsWithChildren } from 'react';
import { Link as LinkReactRouterDom } from 'react-router-dom';
import { ConcretePaths } from './types/paths';

// TODO: add state, push and replace functionality
// TODO: add index param props, already typed

interface LinkProps<UserRoutes> extends PropsWithChildren {
  to: ConcretePaths<UserRoutes>;
}

export const makeLink =
  <UserRoutes,>() =>
  ({ to, children }: LinkProps<UserRoutes>) => {
    return <LinkReactRouterDom to={to}>{children}</LinkReactRouterDom>;
  };
