/* eslint-disable @typescript-eslint/no-explicit-any */
import createRoutes,  { path } from './createRoutes';

describe('createRoutes', () => {

  it('creates a dictionary with paths without children', () => {
    const homeComponent = () => <h1>yay</h1>
    const blogComponent = () => <h1>wow</h1>
    const routesPath = createRoutes ()
      .path("/home", {component: homeComponent})
      .path("/blog", {component: blogComponent})  

    expect(routesPath.dictionary).toMatchObject({
      "home": { name: "home", component: homeComponent},
      "blog": { name: "blog", component: blogComponent}
    })
  });
  it('creates a dictionary with the correct structure with routes having children', () => {
    
    const oneComponent = () => <h1>yay</h1>
    const twoComponent = () => <h1>wow</h1>

    const routesPath = 
       path("/home", {component: oneComponent})
      .path("/blog", {
        component: twoComponent,
        children: 
           path("/post", {component: oneComponent})
          .path("/list", {component: twoComponent})
      })

    expect(routesPath.dictionary).toMatchObject({
      "home": { name: "home", component: oneComponent},
      "blog": { name: "blog", component: twoComponent},
      "blog/post": { name: "blogpost", component: oneComponent},
      "blog/list": { name: "bloglist", component: twoComponent},
    })
  })

  /* it('creates a dictionary with the correct structure with routes having children, and one route with empty component', () => {
    
    const oneComponent = () => <h1>yay</h1>
    const twoComponent = () => <h1>wow</h1>

    const routesPath = 
       path("/home", {component: oneComponent})
      .path("/blog", {
        children: 
           path("/post", {component: oneComponent})
          .path("/list", {component: twoComponent})
      })

    expect(routesPath.dictionary).toMatchObject({
      "home": { name: "home", component: oneComponent},
      "blog": { name: "blog", component: twoComponent},
      "blog/post": { name: "blogpost", component: oneComponent},
      "blog/list": { name: "bloglist", component: twoComponent},
    })
  }) */

});
