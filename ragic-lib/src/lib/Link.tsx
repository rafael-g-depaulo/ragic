import React from 'react';
import { Link as LinkReactRouterDom } from 'react-router-dom';
import { LinkProps } from './types/link';

// TODO: add state, push and replace functionality

const parseParams = (routeTemplate: string, params: Record<string, string>) =>
  routeTemplate
    .split('/')
    .map((segment) => (segment[0] === ':' ? params[segment.slice(1)] : segment))
    .join('/');

export const makeLink =
  <UserRoutes,>(routes: UserRoutes) =>
  (props: LinkProps<UserRoutes>) => {
    return (
      <LinkReactRouterDom
        to={parseParams(props.to, (props as any).params)}
        children={props.children}
      />
    );
  };
