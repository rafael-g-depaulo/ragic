import React, { PropsWithChildren } from 'react';
import { Routes } from './types';

export interface RouterProps<
  routeNames extends string extends routeNames ? never : string
> extends PropsWithChildren {
  routes: Routes<routeNames>;
}

export const Router = <
  routeNames extends string extends routeNames ? never : string
>(
  props: RouterProps<routeNames>
) => {
  // TODO: actually implement routes
  return <div>routes here</div>;
};
