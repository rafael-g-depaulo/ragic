import React, { PropsWithChildren } from 'react';
import { Link as LinkReactRouterDom } from 'react-router-dom';

interface LinkProps<
  routeNames extends string extends routeNames ? never : string
> extends PropsWithChildren {
  to: routeNames;
}

export const Link = <
  routeNames extends string extends routeNames ? never : string
>({
  to,
  children,
}: LinkProps<routeNames>) => {
  return <LinkReactRouterDom to={to}>{children}</LinkReactRouterDom>;
};
