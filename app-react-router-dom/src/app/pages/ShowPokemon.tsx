import { FC } from 'react';
import { usePokemon } from '../api/fetchPokemonInfo';
import { Loading } from '../components/Loading';
import { Navbar } from '../components/Navbar';
import { PageContent } from '../components/PageContent';
import { PageTitle } from '../components/PageTitle';
import { PokeInfoCard } from '../components/PokeInfoCard';
import { useParams } from 'react-router-dom';

export const ShowPokemonPage: FC = () => {
  const { pokemon_id } = useParams();
  const pokemon = usePokemon(pokemon_id as string);

  return (
    <>
      <Navbar />
      <PageContent>
        {!pokemon ? (
          <Loading />
        ) : (
          <>
            <PageTitle>Showing {pokemon.name}</PageTitle>
            <PokeInfoCard pokemon={pokemon} />
          </>
        )}
      </PageContent>
    </>
  );
};
