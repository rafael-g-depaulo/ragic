import { RoutesFunc } from './types';

export const createRoutes: RoutesFunc = ((
  routes
) => {
  const dicRoutes = {}

  for (const route in routes){
    if (route) {

    }
  }

  return dicRoutes
});



// export const createRoutes = <routeNames extends string>(
//   routes: Route<routeNames>[]
// ): Routes<routeNames> => {
//   const dicRoutes = {} as Routes<routeNames>
//
//   for (const route of routes){
//     if (route.children.length > 0) {
//       const subRoutes = createRoutes(route.children)
//       for (const [subName, subRoute] of Object.entries<Route<routeNames>>(subRoutes)) {
//         const subrouteName = (route.name + "/" + subName) as routeNames
//         dicRoutes[subrouteName] = subRoute;
//       }
//     }
//     dicRoutes[route.name] = route
//   }
//    return dicRoutes
// };


/* const routesPath = routing ()
      .path("/home", {component: {} as any})
      .path("/blog", {
        component: {} as any,
        children: 
          path("/post", {component: {} as any})
          .path("/list", {component: {} as any})
      })
      .done() */