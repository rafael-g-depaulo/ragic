import { UseRoutes, createRoutes, path } from '@ragic/ragic-lib';

import Home from './pages/Home';
import BlogList from './pages/BlogList';

const routes = createRoutes()
  .path('/', { component: Home })
  .path('/blog', { children: path('/', { component: BlogList }) });

export const { Link, Router, useRouteParams } = UseRoutes(routes);
