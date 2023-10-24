import { UseRoutes, createRoutes, path } from '@ragic/ragic-lib';

import { HomePage } from './pages/HomePage';
import { ListAllPokemonPage } from './pages/ListAll';
import { ShowPokemonPage } from './pages/ShowPokemon';
import { ListPokemonByTypePage } from './pages/ListByType';

const routes = createRoutes()
  .path('/', { component: HomePage })
  .path('/pokemon', {
    children: path('/', { component: ListAllPokemonPage }).path(
      '/:pokemon_id',
      {
        component: ShowPokemonPage,
      }
    ),
  })
  .path('/type', {
    children: path('/:type_id', { component: ListPokemonByTypePage }),
  });

export const { Link, Router, useRouteParams } = UseRoutes(routes);
