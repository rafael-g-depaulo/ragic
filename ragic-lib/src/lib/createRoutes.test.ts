/* eslint-disable @typescript-eslint/no-explicit-any */
import createRoutes from './createRoutes';

describe('createRoutes', () => {
  /* it('creates a dictionary with the correct structure', () => {
    const routesPath = createRoutes ()
      .path("/home", {component: {} as any})
      .path("/blog", {
        component: {} as any,
        children: 
          path("/post", {component: {} as any})
          .path("/list", {component: {} as any})
      })
      .done()

    expect(routesPath.dictionary).toMatchObject({
      "home": { name: "home", component: {}},
      "blog": { name: "blog", component: {}},
      "blog/blogpost": { name: "blogpost", component: {}},
      "blog/bloglist": { name: "bloglist", component: {}},
    })
  }); */

  it('creates a dictionary with paths without children', () => {
    const routesPath = createRoutes ()
      .path("/home", {component: {} as any})
      .path("/blog", {component: {} as any})  

    expect(routesPath.dictionary).toMatchObject({
      "home": { name: "home", component: {}},
      "blog": { name: "blog", component: {}}
    })
  })
});
