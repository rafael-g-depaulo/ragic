import { FC } from 'react';
import { Routes } from './types';
import { createHashRouter, RouterProvider } from 'react-router-dom';

export const makeRouter =
  <UserRoutes,>(routes: UserRoutes) =>
  () => {
    // const routePath = [];
    //
    // for (const item in routes) {
    //   routePath.push({
    //     path: '/' + routes[item].name,
    //     element: (routes[item] as ConcreteRoute<typeof item>).component,
    //   });
    // }
    // const routes_ = createHashRouter(routePath);
    // return <RouterProvider router={routes_} />;
  };
