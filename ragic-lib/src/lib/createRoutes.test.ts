/* eslint-disable @typescript-eslint/no-explicit-any */
import { createRoutes } from './createRoutes';

describe('createRoutes', () => {
  it('creates a dictionary with the correct structure', () => {
    const routes = createRoutes <"home" | "blog" | "blogpost" | "bloglist"> ([
      { name: 'home', component: {} as any, children: [] },
      {
        name: 'blog',
        component: {} as any,
        children: [
          {
            name: 'blogpost',
            component: {} as any,
            children: []
          },
          {
            name: 'bloglist',
            component: {} as any,
            children: []
          }
        ],
      },
    ]);

    expect(routes).toMatchObject({
      "home": { name: "home", component: {}},
      "blog": { name: "blog", component: {}},
      "blog/blogpost": { name: "blogpost", component: {}},
      "blog/bloglist": { name: "bloglist", component: {}},
    })
  });
});
