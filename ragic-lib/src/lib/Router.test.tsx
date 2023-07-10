import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/react'
import { Router } from './Router'

test ('receives an object with name of pages and returns components', async () => {

  render(<Router routes={{ 
    "home": {name: "home", component: <h1> Home </h1>} , "blog/list": {name: "bloglist", component: <h1> List </h1> }, "blog/post": {name: "blogpost", component: <h1> Post </h1>}
  }} />)
})
