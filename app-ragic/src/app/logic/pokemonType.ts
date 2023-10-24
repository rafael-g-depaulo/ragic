import { pokeApiType } from "../api/fetchPokemonByType"
import {
  getPokemonIdFromUrl,
  PokemonLink,
  spriteUrlfromPokemonId,
} from "./getPokemonInfo"

export const pokemonTypeNames = [
  "normal",
  "fire",
  "fighting",
  "water",
  "flying",
  "grass",
  "poison",
  "electric",
  "ground",
  "psychic",
  "rock",
  "ice",
  "bug",
  "dragon",
  "ghost",
  "dark",
  "steel",
  "fairy",
  "???",
] as const

type PokemonTypeNames = (typeof pokemonTypeNames)[number]

export const typeIdByPokemonType: { [k in PokemonTypeNames]: number } = {
  normal: 1,
  fighting: 2,
  flying: 3,
  poison: 4,
  ground: 5,
  rock: 6,
  bug: 7,
  ghost: 8,
  steel: 9,
  fire: 10,
  water: 11,
  grass: 12,
  electric: 13,
  psychic: 14,
  ice: 15,
  dragon: 16,
  dark: 17,
  fairy: 18,
  "???": 10001,
}

export const PokemonTypes = pokemonTypeNames.map((name) => ({
  name,
  id: typeIdByPokemonType[name],
}))

export interface Type {
  name: PokemonTypeNames
  id: string
}

export interface Poketype {
  name: Type["name"]
  pokemon: PokemonLink[]
}

export const parseType = (apiType: pokeApiType): Poketype => ({
  name: apiType.name,
  pokemon: apiType.pokemon.map(({ pokemon }) => {
    const id = getPokemonIdFromUrl(pokemon.url)
    return {
      id,
      name: pokemon.name,
      spriteUrl: spriteUrlfromPokemonId(id),
    }
  }),
})
