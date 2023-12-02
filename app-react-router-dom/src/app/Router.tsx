import { Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { ListAllPokemonPage } from './pages/ListAll';
import { ShowPokemonPage } from './pages/ShowPokemon';
import { ListPokemonByTypePage } from './pages/ListByType';

export const Router = () => (
  <Routes>
    <Route index element={<HomePage />} />
    <Route path="pokemon">
      <Route index element={<ListAllPokemonPage />} />
      <Route path=":pokemon_id" element={<ShowPokemonPage />} />
    </Route>
    <Route path="type">
      <Route path=":type_id" element={<ListPokemonByTypePage />} />
    </Route>
  </Routes>
);
