import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Component } from "./types/globals"

// função que filtra o objeto de rotas pra só pegar as rotas mesmo, sem métodos internos e tal
const getConcreteRoutes = <UseRoutes,>(routes: UseRoutes) =>
  Object.fromEntries(
    Object.entries(routes as object).filter(([key]) => key[0] === "/")
  ) as { [k: string]: Component }

export const makeRouter =
  <UserRoutes,>(routes: UserRoutes) =>
    () => {
      console.log("concrete routes", getConcreteRoutes(routes))
      return (
        <BrowserRouter>
          <Routes>
            {" "}
            {Object.entries(getConcreteRoutes(routes)).map(
              ([path, Component]) => (
                <Route path={path} Component={Component as any} />
              )
            )}
          </Routes>
        </BrowserRouter>
      )
    }
