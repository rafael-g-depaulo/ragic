import React from 'react';
import { Link as LinkReactRouterDom } from 'react-router-dom';
import { LinkProps } from './types/link';

// TODO: add state, push and replace functionality

export const makeLink =
  <UserRoutes,>(routes: UserRoutes) =>
  (props: LinkProps<UserRoutes>) => {
    // TODO: parse and substitute params

    return (
      <LinkReactRouterDom to={props.to}>{props.children}</LinkReactRouterDom>
    );
  };
