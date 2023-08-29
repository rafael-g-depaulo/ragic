import { Component } from "./types/globals"

interface entry {
  name: string,
  component: Component
}

interface Context {
  dictionary: Record<string, entry>,
}

interface RetRoute {
  dictionary: Record<string, entry>
  path: (pathName: string, structure: {component: Component, children?: RetRoute}) => RetRoute ///
}

const makeDictionary = (oldDictionary: Record<string, entry>, pathName: string, rComponent: Component, children?: RetRoute): Record<string, entry> => {

  const newDictionary = {
    ...oldDictionary,
    [pathName]: {name: pathName, component: rComponent}
  }

  if(children) {
    for (const [key, value] of Object.entries(children.dictionary)) {
      newDictionary[pathName + "/" + key] = {name: pathName + key, component: value.component}
    }
  }

  return newDictionary
}

const builder = ( props: Context ): RetRoute => {

  const retDictionary = props.dictionary

  return {
    dictionary: retDictionary,
    path: (rPathName: string, rStructure: { component: Component, children?: RetRoute}) => builder ({
      dictionary: makeDictionary(retDictionary, rPathName.substring(1), rStructure.component, rStructure.children)
    })
  }
}

const createRoutes = () => {
  return builder ({dictionary: {}})
}

export const path = createRoutes().path

export default createRoutes