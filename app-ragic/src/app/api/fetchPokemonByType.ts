import { useQuery } from "react-query"
import { pokeApi } from "."
import { Type } from "../logic/pokemonType"
import { parseType } from "../logic/pokemonType"

export interface pokeApiType {
  name: Type["name"]
  pokemon: { pokemon: { name: string; url: string } }[]
}

const fetchPokemonByType = (typeId: string) =>
  pokeApi
    .get(`/type/${typeId}`)
    .then<pokeApiType>((response) => response.data)
    .then(parseType)

export const usePokemonByType = (typeId: string) =>
  useQuery(`/type/${typeId}`, () => fetchPokemonByType(typeId)).data ?? {
    name: "",
    pokemon: [],
  }
