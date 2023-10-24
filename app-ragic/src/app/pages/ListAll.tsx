import { useAllPokemon } from "../api/allPokemon"
import { Loading } from "../components/Loading"
import { Navbar } from "../components/Navbar"
import { PageContent } from "../components/PageContent"
import { PageTitle } from "../components/PageTitle"
import { PokeCard } from "../components/PokeCard"
import { PokelistContainer } from "../components/PokelistContainer"

export const ListAllPokemonPage = () => {
  const data = useAllPokemon()
  return (
    <>
      <Navbar />
      <PageContent>
        <PageTitle>List all Pokemon</PageTitle>
        <PokelistContainer>
          {!data ? (
            <Loading />
          ) : (
            data.map((pokemon) => (
              <PokeCard pokemon={pokemon} key={pokemon.name} />
            ))
          )}
        </PokelistContainer>
      </PageContent>
    </>
  )
}
