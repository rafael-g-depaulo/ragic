import { useQuery } from "react-query"
import { pokeApi } from "."
import { getPokemonLink, PokemonLink } from "../logic/getPokemonInfo"

const fetchAllPokemon = () =>
  pokeApi
    .get("/pokemon?limit=100000")
    .then((response) => response.data.results)
    .then<PokemonLink[]>((pokemon) => pokemon.map(getPokemonLink))

export const useAllPokemon = () =>
  useQuery("/pokemon", () => fetchAllPokemon())?.data
