import React from 'react';
import { Routes } from './types';

interface LinkProps<routeNames extends string> {
  to: routeNames;
}

export const Link =
  <routeNames extends string>(routes: Routes<routeNames>) =>
  ({ to }: LinkProps<routeNames>) => {
    return <>Linking to {to}</>;
  };
