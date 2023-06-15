import React, { FC } from 'react';
import { ConcreteRoute, Routes } from './types';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';

export interface RouterProps {
  routes: Routes<string>;
}

export const Router: FC<RouterProps> = ({ routes}) => {
  const routePath = []
  
  for (const item in routes) {
    routePath.push({
      path: "/" + routes[item].name,
      element: (routes[item] as ConcreteRoute<typeof item>).component
    })
  }
  const routes_ = createHashRouter(routePath)
  return (
    <RouterProvider router = {routes_} />
  )
};
