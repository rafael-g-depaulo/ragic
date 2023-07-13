import { Route, Routes } from './types';

export const createRoutes = <routeNames extends string>(
  routes: Route<routeNames>[]  
): Routes<routeNames> => {
  const dicRoutes = {} as Routes<routeNames>

  for (const route of routes){
    if (route.children.length > 0) {
      const subRoutes = createRoutes(route.children)
      for (const [subName, subRoute] of Object.entries<Route<routeNames>>(subRoutes)) {
        const subrouteName = (route.name + "/" + subName) as routeNames
        dicRoutes[subrouteName] = subRoute;
      }
    }
    dicRoutes[route.name] = route
  }  
   return dicRoutes
};
