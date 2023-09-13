import { UseRoutes, createRoutes, path } from '@ragic/ragic-lib';

import Home from './pages/Home';
import BlogList from './pages/BlogList';
import BlogPostView from './pages/BlogPostView';

const routes = createRoutes()
	.path('/', { component: Home })
	.path('/blog', {
		children: path('/', { component: BlogList }).path('/:blog_id', {
			component: BlogPostView,
		}),
	});

export const { Link, Router, useRouteParams } = UseRoutes(routes);
