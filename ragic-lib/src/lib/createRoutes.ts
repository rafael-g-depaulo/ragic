import { RoutesFunc } from './types';

interface Context {
  dictionary: Record<string, object>
}

interface RetRoute {
  dictionary: Record<string, object>
  path: (pathName: string, structure: {component: object}) => RetRoute ///
}

const builder = ( props: Context ): RetRoute => {

  const retDictionary = props.dictionary

  return {
    dictionary: retDictionary,
    path: (rPathName: string, rStructure: { component: object }) => builder ({
      dictionary: {
        ...retDictionary,
        [rPathName.substring(1)]: rStructure
      }  
    })
  }
}

const createRoutes = () => {
  return builder ({dictionary: {}})
}

export default createRoutes