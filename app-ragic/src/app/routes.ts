import { UseRoutes, createRoutes } from '@ragic/ragic-lib';

import Home from './pages/Home';

const routes = createRoutes().path('/', { component: Home });

export const { Link, Router, useRouteParams } = UseRoutes(routes);
