import { useQuery } from "react-query"
import { pokeApi } from "."
import { getPokemonInfo } from "../logic/getPokemonInfo"

const fetchPokemonInfo = (pokemonId: string) =>
  pokeApi
    .get(`/pokemon/${pokemonId}`)
    .then((response) => response.data)
    .then(getPokemonInfo)

export const usePokemon = (pokemonId: string) =>
  useQuery(`/pokemon/${pokemonId}`, () => fetchPokemonInfo(pokemonId))?.data
