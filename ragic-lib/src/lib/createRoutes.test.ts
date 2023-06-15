/* eslint-disable @typescript-eslint/no-explicit-any */
import { createRoutes } from './createRoutes';

describe('createRoutes', () => {
  it('creates a dictionary with the correct structure', () => {
    const routes = createRoutes([
      { name: 'home', component: {} as any },
      {
        name: 'blog',
        component: {} as any,
        children: [
          {
            name: 'blogpost',
            component: {} as any,
          },
          {
            name: 'bloglist',
            component: {} as any,
          }
        ],
      },
    ]);

    expect(routes).toMatchObject({
      "name": { name: "name", component: {}},
      "blog": { name: "blog", component: {}},
      "blog/blogpost": { name: "blog/blogpost", component: {}},
      "blog/bloglist": { name: "blog/bloglist", component: {}},
    })
  });
});
