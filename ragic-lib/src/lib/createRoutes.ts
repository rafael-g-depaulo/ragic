import { Route, Routes } from './types';

// TODO: implement route dictionary creation
export const createRoutes = <routeNames extends string>(
  routes: Route<routeNames>[]
): Routes<routeNames> => {
  console.log(routes);
  return {} as Routes<routeNames>;
};
