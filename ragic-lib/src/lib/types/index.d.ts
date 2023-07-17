import { IncompleteRoutes } from './route-tree';

export type RoutesFunc = () => IncompleteRoutes<[]>;
export { type PathFunc } from './path-func';

export { type Routes } from './route-tree.d.ts';
