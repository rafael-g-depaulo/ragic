/* eslint-disable @typescript-eslint/no-explicit-any */
import path from 'path';
import { createRoutes } from './createRoutes';

describe('createRoutes', () => {
  it('creates a dictionary with the correct structure', () => {
    const routesPath = createRoutes ()
      .path("/home", {component: {} as any})
      .path("/blog", {
        component: {} as any,
        children: 
          path("/post", {component: {} as any})
          .path("/list", {component: {} as any})
      })
      .done()

    expect(routesPath).toMatchObject({
      "home": { name: "home", component: {}},
      "blog": { name: "blog", component: {}},
      "blog/blogpost": { name: "blogpost", component: {}},
      "blog/bloglist": { name: "bloglist", component: {}},
    })
  });
});
