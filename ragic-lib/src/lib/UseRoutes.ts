//! IMPORTANTE! ISSO NÃO É UM HOOK, É SÓ QUE NÃO TEMOS UM NOME MELHOR NO MOMENTO.

import { makeLink } from './Link';
import { makeRouter } from './Router';

export const UseRoutes = <UserRoutes>(routes: UserRoutes) => ({
  Link: makeLink<UserRoutes>(routes),
  Router: makeRouter<UserRoutes>(routes),
});